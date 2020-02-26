'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var usernameInput = document.querySelector('.setup-user-name');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupForm = document.querySelector('.setup-wizard-form');
var setupButton = setup.querySelector('.setup-submit');
var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');

function getRandomWizard(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var generateWizardsInfo = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[getRandomWizard(0, WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[getRandomWizard(0, WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COLOR[getRandomWizard(0, WIZARD_COLOR.length)],
      eyesColor: WIZARD_EYESCOLOR[getRandomWizard(0, WIZARD_EYESCOLOR.length)]
    };
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

userDialog.classList.remove('hidden');
var wizards = generateWizardsInfo();
renderWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    if (usernameInput !== document.activeElement) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var submitFormHandler = function () {
  setupForm.submit();
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupButton.addEventListener('click', submitFormHandler);

setupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    submitFormHandler();
  }
});

setupWizardCoat.addEventListener('click', function () {
  setupWizardCoat.style.fill = WIZARD_COLOR[getRandomWizard(0, WIZARD_COLOR.length)];
});

setupWizardEyes.addEventListener('click', function () {
  setupWizardEyes.style.fill = WIZARD_EYESCOLOR[getRandomWizard(0, WIZARD_EYESCOLOR.length)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = FIREBALL_COLOR[getRandomWizard(0, FIREBALL_COLOR.length)];
});
