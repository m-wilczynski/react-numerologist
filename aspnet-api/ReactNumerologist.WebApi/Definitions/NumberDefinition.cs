namespace ReactNumerologist.WebApi.Definitions
{
    using System.Collections.Generic;

    public class NumberDefinition
    {
        public int Number { get; set; }
        public string Planet { get; set; }
        public string GeneralDescription { get; set; }
        public List<string> Keywords { get; set; }
        public string AsLoversDescription { get; set; }
        public string PrecautionsDescription { get; set; }
    }
}
