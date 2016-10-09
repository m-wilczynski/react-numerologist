namespace ReactNumerologist.WebApi.Providers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class NumberFromFullNameProvider
    {
        private static readonly Dictionary<char, int> AlphabetMap = new Dictionary<char, int>();

        static NumberFromFullNameProvider()
        {
            BuildAlphabetMap();
        }

        private static void BuildAlphabetMap()
        {
            int counter = 1;
            for (char letter = 'A'; letter <= 'Z'; letter++, counter++)
            {
                AlphabetMap.Add(letter, counter);
            }
        }

        public int ProvideNumber(string fullName)
        {
            if (string.IsNullOrEmpty(fullName))
                throw new ArgumentNullException(nameof(fullName));
            var total = fullName.ToUpperInvariant()
                .Where(letter => AlphabetMap.ContainsKey(letter))
                .Sum(letter => AlphabetMap[letter]);
            var output = 0;
            while (output < 1 || output > 9)
            {
                output = 0;
                while (total != 0)
                {
                    output += total%10;
                    total /= 10;
                }
                total = output;
            };
            return output;
        }

    }
}
