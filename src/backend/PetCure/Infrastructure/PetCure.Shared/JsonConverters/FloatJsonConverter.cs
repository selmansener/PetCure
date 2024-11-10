using Newtonsoft.Json;

using System.Globalization;

namespace PetCure.Shared.JsonConverters
{
    public class FloatJsonConverter : JsonConverter<float>
    {
        private const int _decimalPlaces = 2;

        public override void WriteJson(JsonWriter writer, float value, JsonSerializer serializer)
        {
            writer.WriteRawValue(value.ToString($"F{_decimalPlaces}", CultureInfo.InvariantCulture));
        }

        public override float ReadJson(JsonReader reader, Type objectType, float existingValue, bool hasExistingValue, JsonSerializer serializer)
        {
            if (reader.TokenType != JsonToken.Float && reader.TokenType != JsonToken.Integer)
            {
                throw new JsonSerializationException($"Unexpected token {reader.TokenType} when parsing decimal.");
            }

            return Convert.ToSingle(reader.Value, CultureInfo.InvariantCulture);
        }

        public override bool CanRead => true;
        public override bool CanWrite => true;
    }
}
