using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.Seed.Configuration
{
    internal sealed class SeedCache
    {
        private readonly string _path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "SeedCacheData.json");
        private readonly List<SeedServiceType> _executedServices;

        public SeedCache()
        {
            if (!File.Exists(_path))
            {
                FileStream fileStream = File.Create(_path);
                fileStream.Flush();
                fileStream.Close();
            }

            var executedServices = File.ReadAllText(_path, Encoding.UTF8);

            if (executedServices != null && executedServices.Length > 0)
            {
                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new PrivateSetterContractResolver(),
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                };

                settings.Converters.Add(new StringEnumConverter());

                _executedServices = JsonConvert.DeserializeObject<List<SeedServiceType>>(executedServices, settings);
            }
            else
            {
                _executedServices = new List<SeedServiceType>();
            }
        }

        public void AddExecutedService(SeedServiceType service)
        {
            _executedServices.Add(service);
        }

        public IEnumerable<SeedServiceType> FindUnexecutedServices(IEnumerable<SeedServiceType> services)
        {
            return services.Except(_executedServices);
        }

        public void UpdateSeedCacheData()
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new PrivateSetterContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            settings.Converters.Add(new StringEnumConverter());

            var content = JsonConvert.SerializeObject(_executedServices.Select(x => x.ToString()), settings);

            File.WriteAllText(_path, content, Encoding.UTF8);
        }

        public void Clear()
        {
            _executedServices.Clear();

            File.WriteAllText(_path, null);
        }
    }
}
