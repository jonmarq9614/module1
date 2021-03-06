using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using myGram.Models;

namespace myGram.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult Registering([FromBody]RegisteringClass registering)
        {
            return Content(registering.ToString());
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult LogUser([FromBody]User user)
        {
            
            return Content(user.ToString());
        }
         
        public bool ImagesJson([FromBody]Image image)
        {
            bool imageWasClicked = false;

            if(image!= null)
            {
                imageWasClicked = true;
            }

            return imageWasClicked;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
