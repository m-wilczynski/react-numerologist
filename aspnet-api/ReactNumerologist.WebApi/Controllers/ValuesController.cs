using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactNumerologist.WebApi.Controllers
{
    using Providers;

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [Route("provideNumber/{name}")]
        public int ProvideNumber(string name)
        {
            var def = new NumberDefinitionProvider().ProvideFor(1);
            return new NumberFromFullNameProvider().ProvideNumber(name);
        }
    }
}
