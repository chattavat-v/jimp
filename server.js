var jimp = require("jimp");

let image_url =
  "https://68cc9f47-a-62cb3a1a-s-sites.googlegroups.com/site/eportforiopongpet/sanea-batr-prachachn/27650398_1506989166080448_1573890756_o.jpg?attachauth=ANoY7cqg20ms4210ahMa1bc-X4gP-XLNYNUllVimjOiA8ncZyvYkgKDDxt7Ep2HFmR3jOPqSDwI2FkgjnhM5RTF5Rh_E94URaQPa-VGIZ4IiSZuZLptrfZOlxt6p3kBrdZlSjdzkTbn165iAKGwEfmA96Q_OXwHyun7G5dZ6Fmkg-3Buof6wIpOXvXLyaqacQ4zkdYDkfboLmAGYojA2PX-GcnGUFYLpm4DS4RayoBHm5Mc2goC_eou4K0tSDQwOqWIfaZcW0QgmLepP1rxrK-OnEUj503_ElCi6Z9CGdx-Tohb0Gp3XmlI%3D&attredirects=0";

var images = [image_url, "images/banner.png", "images/logo.png"];

var jimps = [];

for (var i = 0; i < images.length; i++) {
  jimps.push(jimp.read(images[i]));
}

Promise.all(jimps)
  .then(function(data) {
    return Promise.all(jimps);
  })
  .then(function(data) {
    data[0].resize(1024, 1024);
    data[2].rotate( 45 );
    data[2].opacity(0.3);
    data[0].composite(data[2], -128, -128);

    data[0].write("final-images/test.png", function() {
      console.log("wrote the image");
    });
  });
