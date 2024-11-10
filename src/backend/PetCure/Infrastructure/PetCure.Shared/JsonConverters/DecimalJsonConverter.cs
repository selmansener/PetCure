using Newtonsoft.Json;

using System.Globalization;

namespace PetCure.Shared.JsonConverters
{
    public class DecimalJsonConverter : JsonConverter<decimal>
    {
        private const int _decimalPlaces = 2;

        public override void WriteJson(JsonWriter writer, decimal value, JsonSerializer serializer)
        {
            writer.WriteRawValue(value.ToString($"F{_decimalPlaces}", CultureInfo.InvariantCulture));
        }

        public override decimal ReadJson(JsonReader reader, Type objectType, decimal existingValue, bool hasExistingValue, JsonSerializer serializer)
        {
            if (reader.TokenType != JsonToken.Float && reader.TokenType != JsonToken.Integer)
            {
                throw new JsonSerializationException($"Unexpected token {reader.TokenType} when parsing decimal.");
            }

            return Convert.ToDecimal(reader.Value, CultureInfo.InvariantCulture);
        }

        public override bool CanRead => true;
        public override bool CanWrite => true;
    }
}
