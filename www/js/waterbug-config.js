// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    'text': {
        whitePath: '../img/lens-logo-retina.png', // path to white logo
        blackPath: '../img/lens-logo-retina.png', // path to black logo
        w: 200, // width of logo
        h: 59, // height of logo
        display: 'Large'
    },
    'glass': {
        whitePath: '../img/lens-logo-magnifying-glass-alpha.png',
        blackPath: '../img/lens-logo-magnifying-glass-alpha.png',
        w: 64,
        h: 64,
        display: 'Small'
    }
};

// logo opacity for colors
var whiteLogoAlpha = '0.6';
var blackLogoAlpha = '0.9';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '20pt'; // font size for credit
var fontFace = "news-gothic-std"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'The Lens';
var freelanceString = 'for ' + orgName;

var copyrightOptions = {
    'internal': {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: false, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName, // How the option will appear in the dropdown menu
    },
    'freelance': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: true,
        sourceRequired: false,
        source: freelanceString,
        display: 'Freelance'
    },
    'ap': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'AP',
        display: 'AP'
    },
    'getty': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'Getty Images',
        display: 'Getty'
    },
    'thirdParty': {
        showPhotographer: true,
        showSource: true,
        photographerRequired: false,
        sourceRequired: true,
        source: '',
        display: 'Third Party/Courtesy'
    }
};

// app load defaults
var currentCrop = 'twitter'; // default crop size
var currentLogoType = 'text'; // default logo slug
var currentLogoColor = 'black'; // default logo color
var currentLogoPosition = 'bottom_left';  // default logo placement
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-demolition.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogoType]['whitePath']; // path to default logo
