namespace ReactNumerologist.WebApi.Providers
{
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using Definitions;
    using Newtonsoft.Json;

    public class NumberDefinitionProvider
    {
        private static Dictionary<int, NumberDefinition> _definitions = null; 

        private static void LoadFromJsonFile()
        {
            var serializer = new JsonSerializer();
            var dir = Directory.GetCurrentDirectory();
            var path = Path.Combine(Directory.GetCurrentDirectory(), @"_resources\number_definitions.json");
            using (var re = File.OpenText(path))
            using (var reader = new JsonTextReader(re))
            {
                var definitions = serializer.Deserialize<NumberDefinition[]>(reader);
                _definitions = definitions.ToDictionary(def => def.Number, def => def);
            }
        }

        public NumberDefinition ProvideFor(int number)
        {
            if (_definitions == null)
            {
                LoadFromJsonFile();
            }
            NumberDefinition definition = null;
            _definitions.TryGetValue(number, out definition);
            return definition;
        }
    }
}
