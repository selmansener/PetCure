namespace PetCure.Shared.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string resourceName, string keyOrCondition)
            : base($"{resourceName} not found with key or condition: {keyOrCondition}")
        {
            Data.Add(nameof(resourceName), resourceName);
            Data.Add(nameof(keyOrCondition), keyOrCondition);
        }
    }
}
