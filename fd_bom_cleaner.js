/*
This script step was needed due to a bug related to a BOM character added to the input string, which caused the API call to fail.
Example: original input string: 848, what was received by OT: 848﻿ <-- note the red dot, which is invisible and unprintable and was only discovered in an IDE (VS Code)
PRB1606387 should be fixed in Tokyo Patch 2 (https://docs.servicenow.com/bundle/tokyo-release-notes/page/release-notes/quality/tokyo-patch-2.html)
Please test on Tokyo Patch 2 or above and possibly this step can be removed.
*/

(function execute(inputs, outputs) {

  var originalString = inputs.original.toString();
  var cleanString = originalString.replace("\ufeff", "");
  outputs.cleaned_string = cleanString.trim();
  
})(inputs, outputs);
