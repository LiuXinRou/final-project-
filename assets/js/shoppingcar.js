// This button will increment the value
$(".plus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".minus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  
  
  
  $(function() {
  // This button will increment the value
  $("#plus2").click(function(e) {
    
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("field");
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 0);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
    console.log(currentVal);
    
  });
  // This button will decrement the value till 0
  $("#minus2").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 0);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  });