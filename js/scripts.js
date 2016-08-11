


var feet = function() {
	var num1 = parseInt($("#feet").val());
	return num1;
}

var inches = function() {
	var num2 = parseInt($("#inches").val());
	return num2;
}

var height = function(num1, num2) {
  return(num1 * 12 + num2);
}
//alert(num1);


$(document).ready(function() {
	$("#subHeight").click(function(event) {
    event.preventDefault();
    console.log("got here");
		var num1 = feet();
		var num2 = inches();
    var heightresult = height(num1, num2);

		if (!heightresult) {
      alert("Must enter height");
    }
    else if ( heightresult >= 60 ) {
			$("#allRides").show();
      $("#highlight").hide();

    } else {
      (heightresult < 60)
      $("#highlight").show();
      $("#allRides").hide();
    }
      event.preventDefault();

	});


});
 //60 inches
