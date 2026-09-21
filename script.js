/**
 * When Does a Boy Actually Stop Growing? — landing page script
 *
 * Handles the mid-parental height mini-calculator using the standard
 * clinical formula for boys:
 *
 *   predicted height (cm) = (father's height + mother's height + 13) / 2
 *
 * This method (Tanner mid-parental height estimate) gives a statistical
 * range, not a precise prediction — roughly 68% of boys land within
 * about 8.5 cm of the calculated number. That range is shown alongside
 * the result rather than a single misleading figure.
 */

(function () {
  'use strict';

  var form = document.getElementById('height-form');
  var resultEl = document.getElementById('result');
  var fatherInput = document.getElementById('father-height');
  var motherInput = document.getElementById('mother-height');

  var MID_PARENTAL_OFFSET_BOY = 13; // cm, added before halving, for boys
  var RANGE_CM = 8.5; // approx. 1 SD for the mid-parental method

  function cmToFeetInches(cm) {
    var totalInches = cm / 2.54;
    var feet = Math.floor(totalInches / 12);
    var inches = Math.round(totalInches % 12);
    if (inches === 12) {
      feet += 1;
      inches = 0;
    }
    return feet + "'" + inches + '"';
  }

  function showError(message) {
    resultEl.hidden = false;
    resultEl.className = 'result error';
    resultEl.innerHTML = '<p class="result-headline">' + message + '</p>';
  }

  function showResult(estimateCm) {
    var lowCm = estimateCm - RANGE_CM;
    var highCm = estimateCm + RANGE_CM;

    resultEl.hidden = false;
    resultEl.className = 'result';
    resultEl.innerHTML =
      '<p class="result-headline">Estimated adult height: ' +
      estimateCm.toFixed(1) + ' cm (' + cmToFeetInches(estimateCm) + ')</p>' +
      '<p class="result-range">Likely range: ' +
      lowCm.toFixed(1) + '\u2013' + highCm.toFixed(1) + ' cm (' +
      cmToFeetInches(lowCm) + '\u2013' + cmToFeetInches(highCm) + ')</p>';
  }

  function handleSubmit(event) {
    event.preventDefault();

    var fatherCm = parseFloat(fatherInput.value);
    var motherCm = parseFloat(motherInput.value);

    if (isNaN(fatherCm) || isNaN(motherCm)) {
      showError('Please enter both parents\u2019 heights in centimeters.');
      return;
    }

    if (fatherCm < 120 || fatherCm > 230 || motherCm < 120 || motherCm > 230) {
      showError('Please double-check those numbers \u2014 heights should be between 120 and 230 cm.');
      return;
    }

    var estimateCm = (fatherCm + motherCm + MID_PARENTAL_OFFSET_BOY) / 2;
    showResult(estimateCm);
  }

  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
})();
