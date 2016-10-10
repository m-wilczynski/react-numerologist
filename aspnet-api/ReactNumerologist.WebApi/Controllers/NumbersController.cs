namespace ReactNumerologist.WebApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System;
    using Definitions;
    using Providers;

    [Route("api/numbers")]
    public class NumbersController : Controller
    {
        [HttpGet("byBirthdate/{date}")]
        public int GetNumberByBirthDate(DateTime date)
        {
            return new NumberFromDateProvider().ProvideNumber(date);
        }

        [HttpGet("byFullname/{fullname}")]
        public int GetNumberByFullName(string fullname)
        {
            return new NumberFromFullNameProvider().ProvideNumber(fullname);
        }

    }
}
