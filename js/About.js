var isSelected = false;
const myProjects = [
  {
    ID: "-aboutUs",
    category: "About Us",
    bImage: "https://static.pexels.com/photos/296881/pexels-photo-296881.jpeg",
    copy:
      `<h1>Something</h1> <p>Curabitur rutrum, pellentesque ipsum hendrerit. Nulla eu. In ipsum ac ultrices eget pretium, dictum velit a. Arcu aliquam nunc consectetuer. Mauris quisque interdum integer mauris fusce. Quam tellus molestie lobortis at diam, ut ac suscipit ante purus, auctor nec iaculis libero leo i</p><p>Lorem ipsum dolor sit amet, vehicula ullamco vel nullam, non vulputate purus sit vel est, egestas nec a.</p> <p>Curabitur rutrum, pellentesque ipsum hendrerit. Nulla eu. In ipsum ac ultrices eget pretium, dictum velit a. Arcu aliquam nunc consectetuer. Mauris quisque interdum integer mauris fusce. Quam tellus molestie lobortis at diam, ut ac su
    scipit ante purus, auctor nec iaculis libero leo i</p><p>Lorem ipsum dolor sit amet, vehicula ullamco vel nullam, non vulputate purus sit vel est, egestas nec a.</p> <p>Curabitur rutrum, pellentesque ipsum hendrerit. Nulla eu. In ipsum ac ultrices eget pretium, dictum velit a. Arcu aliquam nunc consectetuer. Mauris quisque interdum integer mauris fusce. Quam tellus molestie lobortis at diam, ut ac suscipit ante purus, auctor nec iaculis libero leo i</p><p>Lorem ipsum dolor sit amet, vehicula ullamco vel nullam, non vulputate purus sit vel est, egestas nec a.</p> <p>Curabitur rutrum, pellentesque ipsum hendrerit. Nulla eu. In ipsum ac ultrices eget pretium, dictum velit a. Arcu aliquam nunc consectetuer. Mauris quisque interdum integer mauris fusce. Quam tellus molestie lobortis at diam, ut ac suscipit ante purus, auctor nec iaculis libero leo i</p>`
  },
  {
    ID: "-Services",
    category: "services",
    bImage:
      "https://static.pexels.com/photos/373965/pexels-photo-373965.jpeg",
    copy:
      "<h1>Long-term relationship</h1><p>Development isn’t a service - it’s a way of living. It’s that part of your business that is always in view. Of your customers, of your partners, your employees, your family. Of you. That’s why hit-and-run is never an option.</p> <h1>We Can Give Advice</h1> <p>We call the reason why people come to the site a ‘user need’. Answering user needs is the fundamental principle on which we develop digital advice. We use data and research to discover user needs and design content or create tools to fulfil them.</p> <h1>We Write Code That Works</h1> <p>We do not just create websites, we create a connection between people and the world. We are resourceful and creative. We love to innovate. We believe that imagination has no limits. We are always a step forward in the development of new technologies.</p> <h1>We Deliver On Time</h1> <p>We know that time is money in business, so we set realistic deadlines (for ourselves and for our clients) and stick to them. We communicate constantly with our clients to give them updates as we progress and get projects launched by the agreed launch date.</p> "

  },
  {
    ID: "-Works",
    category: "Works",
    bImage:
      "https://static.pexels.com/photos/297755/pexels-photo-297755.jpeg",
    copy:
      "<h1>Works</h1> <p>First example</p>"
  },
  {
    ID: "-Shares",
    category: "shares",
    bImage:
      "https://i0.wp.com/webdesignledger.com/wp-content/uploads/2014/05/7-logo-sketches.jpg?w=970",
    copy:
      "<p>Lorem ipsum dolor sit amet, vehicula ullamco vel nullam, non vulputate purus sit vel est, egestas nec a.</p> <p>Curabitur rutrum, pellentesque ipsum hendrerit. Nulla eu. In ipsum ac ultrices eget pretium, dictum velit a. Arcu aliquam nunc consectetuer. Mauris quisque interdum integer mauris fusce. Quam tellus molestie lobortis at diam, ut ac suscipit ante purus, auctor nec iaculis libero leo i</p>"
  },
  {
    ID: "-Social",
    category: "Social",
    bImage: "http://i.huffpost.com/gen/1644197/images/o-EMAIL-facebook.jpg",
    copy:
      "</p>"
  },
  {
    ID: "-Contact",
    category: "Contact",
    bImage:
      "https://static.pexels.com/photos/220197/pexels-photo-220197.jpeg",
    copy:
      "<h1>Contact</h1> <p>bitebyteagency@gmail.com</p>"
  }
];

var theHighlightedContent = { ID: "", category: "", bImage: "", copy: "" };
var selectedProject;
var scrollBackTo;

var app = new Vue({
  el: "#projectsApp",
  data() {
    return {
      projects: myProjects,
      highlightedContent: theHighlightedContent
    };
  },
  methods: {
    selectProjects: function(thisId) {
      var self = "#" + thisId;
      if ($(self).hasClass("openedProject")) {
        isSelected = false;
        
        if($(self).hasClass('noTransition')){
          var timeoutA = 0;
          var timeoutB = 0;
          var timeoutC = 0;
        }else{
          var timeoutA = 800;
          var timeoutB = 1200;
          var timeoutC = 1600;
        }
        
        
        
        $(self).addClass("midTransition");
        $(self).removeClass("openedProject");
        
        
        

        setTimeout(function() {
          
          $(self).removeClass("midTransition");
          $(".selectedArea").removeClass("opened");
          
        }, timeoutA);
         
       setTimeout(function() {
         $("#projectsApp .projects").removeClass("hidden");
         $("#projectsApp .projects").removeClass("shrunk");
          }, timeoutB);
        setTimeout(function() {
        // window.scrollTo(0, scrollBackTo);
          $("html, body").animate({ scrollTop: scrollBackTo}, 500);
          $(self).addClass('noTransition');
          }, timeoutC);
        
      } else {
        isSelected = true;
        scrollBackTo = $(self).offset().top;
        
        if($(self).hasClass('noTransition')){
          $(".selectedArea").addClass("noTransition");
          $(".copyArea.fadeIn").addClass("noTransition");
          var timeoutD = 0;
        }else{
           $(".selectedArea").removeClass("noTransition");
          $(".copyArea.fadeIn").removeClass("noTransition");
          var timeoutD = 800;
        }
        
        $(self).addClass("midTransition");
        $("#projectsApp .projects").addClass("hidden");
        $(self).removeClass("hidden");
        
        setTimeout(function() {
          $(".selectedArea").addClass("opened");
          $(self).addClass("openedProject");
          $(self).removeClass("midTransition");
          $("#projectsApp .projects").addClass("shrunk");
          
          $(self).removeClass("shrunk");
          
          window.scrollTo(0, 0);
         
         
        }, timeoutD);
      }

      for (var i = 0; i < this.projects.length; i++) {
        if (thisId == this.projects[i].ID) {
          this.highlightedContent = this.projects[i];
        }
      }
    }
  }
});

$(document).ready(function() {
  resizeProjectDivs();
  // resizeProjectDivs();
});
var resizeTimer;
$(window).on("resize", function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    if (isSelected == false) {
      resizeProjectDivs();
    }
  }, 250);
});

function resizeProjectDivs() {
  var midRange = false;
  var smallRange = false;
  var winWidth = $(window).width();
  if (winWidth < 920 && 620 < winWidth) {
    midRange = true;
  }
  if (winWidth < 720) {
    smallRange = true;
  }
  var i = 0;

  $("#projectsApp .projects").each(function() {
    var pWidth = $(this).width();
    var pHeight;
    if (i < 2) {
      pHeight = pWidth;
    } else {
      if (midRange == true) {
        pHeight = pWidth * 0.5;
      } else if (smallRange == true) {
        pHeight = pWidth;
      } else {
        pHeight = pWidth * 1.5;
      }
    }
    $(this).css("height", pHeight + "px");
    i++;
  });
}