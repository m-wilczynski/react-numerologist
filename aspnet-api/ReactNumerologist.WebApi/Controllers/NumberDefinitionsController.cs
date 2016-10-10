namespace ReactNumerologist.WebApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System;
    using Definitions;
    using Providers;

    [Route("api/definitions")]
    public class NumberDefinitionsController : Controller
    {
        [HttpGet("byBirthdate/{date}")]
        public NumberDefinition GetDefinitionByBirthDate(DateTime date)
        {
            var number = new NumberFromDateProvider().ProvideNumber(date);
            return new NumberDefinitionProvider().ProvideFor(number);
        }

        [HttpGet("byFullname/{fullname}")]
        public NumberDefinition GetDefinitionByFullName(string fullname)
        {
            var number = new NumberFromFullNameProvider().ProvideNumber(fullname);
            return new NumberDefinitionProvider().ProvideFor(number);
        }

        [HttpGet("byNumber/{number}")]
        public NumberDefinition GetDefinitionByNumber(int number)
        {
            if (number < 1 || number > 9)
                throw new ArgumentOutOfRangeException();
            return new NumberDefinitionProvider().ProvideFor(number);
        }
    }
}
