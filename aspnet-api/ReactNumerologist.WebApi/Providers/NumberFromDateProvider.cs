namespace ReactNumerologist.WebApi.Providers
{
    using System;

    public class NumberFromDateProvider
    {
        public int ProvideNumber(DateTime birthDate)
        {
            birthDate = birthDate.Date;
            var total = birthDate.Day + birthDate.Month + birthDate.Year;
            var output = 0;
            while (output < 1 || output > 9)
            {
                output = 0;
                while (total != 0)
                {
                    output += total % 10;
                    total /= 10;
                }
                total = output;
            };
            return output;
        }
    }
}
