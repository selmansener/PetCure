using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Shared.Exceptions
{
    public class ConflictException : Exception
    {
        public ConflictException(string typeName, string key, string value)
            : base($"{typeName} already exists with {key}: {value}.")
        {
            Data.Add(nameof(key), key);
            Data.Add(nameof(value), value);
            Data.Add(nameof(typeName), typeName);
        }
    }
}
