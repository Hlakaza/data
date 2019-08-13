let GJ = 'Gauteng - Johannesburg';
let GP = 'Gauteng - Pretoria';
let WC = 'Western Cape';
let EC = 'Eastern Cape';
let FS = 'Freestate';
let MP = 'Mpumalanga';
let LM = 'Limpopo';
let NWP = 'North West Province';
let BT = 'Botswana';
let MLW = 'Malawi';
let NMB = 'Namibia';

let regions = [
  {name: GJ},
  {name: GP},
  {name: WC},
  {name: EC},
  {name: FS},
  {name: MP},
  {name: LM},
  {name: NWP},
  {name: NMB},
  {name: BT},
  {name: MLW},
];

let content = {
    pageTitle: 'Contact',
    title: 'Branch Locator',
    header: `Let’s turn obstacles into <strong class='u-text--xbold'>opportunities</strong>`,
    info: `Looking for a branch near you? Travelling and need to locate a branch in the area?
    Our quick branch locator  provides you with all the contact details, physical address,
    opening hours, GPS co-ordinates, ATM info, and Google map for directions of each branch.`,

    branches: [
      {
         region: GJ,
         branch: 'Bedfordview - Eastgate',
         tel: '011 616 2077/80',
         fax: '011 616 7740',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-18h00,',
         extraDay1: 'Saturday: 09h00-13h00,',
         extraDay2: 'Sunday and Public holidays: 09h00-13h00',
         atm: 'ATM: Located outside of the branch and is available 24 hours a day.',
         address: 'Shop U56, Eastgate Shopping Centre, Bradford Road, Bedfordview, 2007',
         PoBox: `P. O. Box 752302, Gardenview, 2047`,
         coordinates: `S26° 10.774', E28° 07.108'`
      },
      {
       region: GJ,
         branch: 'Benoni',
         tel: '011 849 6502',
         fax: '011 849 1102',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-16h30,',
         extraDay1: 'Saturday: 09h00-12h00,',
         extraDay2: 'Sunday: closed',
         atm: 'ATM: None',
         address: `Shop G18, Northmead Square, Cnr. 14th Avenue & O'Reilly Merry Street, Northmead, Benoni, 1501`,
         PoBox: `P. O. Box 131677 Northmead, Benoni, 1511`,
         coordinates: `S26° 10.774', E28° 07.108'`
      },
      {
       region: GJ,
         branch: 'Braamfontein - Park Station',
         tel: '011 337 9982',
         fax: '011 337 5859',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-16h30,',
         extraDay1: 'Saturday: 09h00-12h00,',
         extraDay2: 'Sunday: closed',
         atm: 'ATM: None',
         address: `Mainline Terminal, Mezzanine Floor, 45 De Villiers Street, Braamfontein, 2001`,
         PoBox: `As per physical address`,
         coordinates: `S26° 11.923', E28° 02.662'`
      },
      {
        region: GJ,
         branch: 'Brakpan - Mall @ Carnival',
         tel: '011 915 0004, 011 915 0034',
         fax: '011 915 0027',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-17h30,',
         extraDay1: 'Saturday: 08h00-13h00,',
         extraDay2: 'Sunday: closed',
         atm: 'ATM: Located inside the branch and is only available during specified branch office hours.',
         address: `Shop 48, Mall @ Carnival, Cnr Heidelberg & Airport Roads, Dalpark Ext 5, Brakpan`,
         PoBox: `As per physical address`,
         coordinates: `S26° 15.032', E28° 18.964'`
      },
      {
        region: GJ,
         branch: 'Corlett Drive',
         tel: ' n/a',
         fax: 'n/a',
         map: '',
         tradeDays: '',
         extraDay1: '',
         extraDay2: '',
         atm: 'ATM: ATM only',
         address: `Ernst & Young, 52 Corlett Drive, Wanderers Office Park, Illovo`,
         PoBox: ``,
         coordinates: ``
      },
      {
        region: GJ,
         branch: 'Cresta',
         tel: '011 476 8450/011 476 8985',
         fax: '011 476 8108',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-17h00,',
         extraDay1: 'Saturday: 08h30-15h00,',
         extraDay2: 'Sunday: closed',
         atm: 'ATM: None',
         address: `Shop L2A, Cresta Shopping Centre, Cnr Weltevreden & Beyers Naude Drive, Cresta, 2194`,
         PoBox: `P O Box 1869, Randburg, 2125`,
         coordinates: `S26° 07.786', E27° 58.353'`
      },
      {
        region: GJ,
         branch: 'Cresta',
         tel: '011 476 8450/011 476 8985',
         fax: '011 476 8108',
         map: '',
         tradeDays: 'Monday-Friday: 09h00-17h00,',
         extraDay1: 'Saturday: 08h30-15h00,',
         extraDay2: 'Sunday: closed',
         atm: 'ATM: None',
         address: `Shop L2A, Cresta Shopping Centre, Cnr Weltevreden & Beyers Naude Drive, Cresta, 2194`,
         PoBox: `P O Box 1869, Randburg, 2125`,
         coordinates: `S26° 07.786', E27° 58.353'`
      },
    ]
  };