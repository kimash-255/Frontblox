import {
  faAddressCard,
  faBarcode,
  faCalendarAlt,
  faClock,
  faEnvelope,
  faFile,
  faFileUpload,
  faFingerprint,
  faFont,
  faGlobe,
  faHashtag,
  faImage,
  faKey,
  faLink,
  faList,
  faLock,
  faPhone,
  faToggleOn,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const fields = [
  { id: "1", name: "AddressField", icon: faAddressCard },
  { id: "2", name: "BooleanField", icon: faToggleOn },
  { id: "3", name: "CharField", icon: faFont },
  { id: "4", name: "DateField", icon: faCalendarAlt },
  { id: "5", name: "DateTimeField", icon: faCalendarAlt },
  { id: "6", name: "DecimalField", icon: faHashtag },
  { id: "7", name: "EmailField", icon: faEnvelope },
  { id: "8", name: "FileField", icon: faFileUpload },
  { id: "9", name: "FloatField", icon: faHashtag },
  { id: "10", name: "ForeignKey", icon: faKey },
  { id: "11", name: "ImageField", icon: faImage },
  { id: "12", name: "IPAddressField", icon: faGlobe },
  { id: "13", name: "ManyToManyField", icon: faUsers },
  { id: "14", name: "NameField", icon: faUser },
  { id: "15", name: "NumberField", icon: faHashtag },
  { id: "16", name: "OneToOneField", icon: faKey },
  { id: "17", name: "PasswordField", icon: faLock },
  { id: "18", name: "PhoneField", icon: faPhone },
  { id: "19", name: "SelectField", icon: faList },
  { id: "20", name: "SlugField", icon: faBarcode },
  { id: "21", name: "SmallTextField", icon: faFont },
  { id: "22", name: "TextareaField", icon: faFont },
  { id: "23", name: "TimeField", icon: faClock },
  { id: "24", name: "URLField", icon: faLink },
  { id: "25", name: "UUIDField", icon: faFingerprint },
];

export default fields;