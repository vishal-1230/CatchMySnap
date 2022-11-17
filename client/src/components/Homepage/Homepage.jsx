import React from 'react'
import FestivalOutlined from '@mui/icons-material/FestivalOutlined';
import Hotel from "@mui/icons-material/Hotel";
import Instagram from "@mui/icons-material/Instagram";
import HolidayVillage from "@mui/icons-material/HolidayVillage";
import CorporateFare from "@mui/icons-material/CorporateFare";
import Header from './Header'
import bg from './cms1.png';

// import FlightIcon from "@mui/icons-material/FestivalOutlined";
// import HomeWorkIcon from "@mui/icons-material/Instagram";
// import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
// import TrainIcon from "@mui/icons-material/CorporateFare";
// import DirectionsBusFilledIcon from "@mui/icons-material/Hotel";
// import styles from './Homepage.module.css'

function Homepage() {
  const statesList=[
    "Achalpur",
    "Achhnera",
    "Adalaj",
    "Adilabad",
    "Adityapur",
    "Adoni",
    "Adoor",
    "Adra",
    "Adyar",
    "Afzalpur",
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Ahmednagar",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Akot",
    "Alappuzha",
    "Aligarh",
    "AlipurdUrban Agglomerationr",
    "Alirajpur",
    "Allahabad",
    "Alwar",
    "Amalapuram",
    "Amalner",
    "Ambejogai",
    "Ambikapur",
    "Amravati",
    "Amreli",
    "Amritsar",
    "Amroha",
    "Anakapalle",
    "Anand",
    "Anantapur",
    "Anantnag",
    "Anjangaon",
    "Anjar",
    "Ankleshwar",
    "Arakkonam",
    "Arambagh",
    "Araria",
    "Arrah",
    "Arsikere",
    "Aruppukkottai",
    "Arvi",
    "Arwal",
    "Asansol",
    "Asarganj",
    "Ashok Nagar",
    "Athni",
    "Attingal",
    "Aurangabad",
    "Aurangabad",
    "Azamgarh",
    "Bagaha",
    "Bageshwar",
    "Bahadurgarh",
    "Baharampur",
    "Bahraich",
    "Balaghat",
    "Balangir",
    "Baleshwar Town",
    "Ballari",
    "Balurghat",
    "Bankura",
    "Bapatla",
    "Baramula",
    "Barbil",
    "Bargarh",
    "Barh",
    "Baripada Town",
    "Barmer",
    "Barnala",
    "Barpeta",
    "Batala",
    "Bathinda",
    "Begusarai",
    "Belagavi",
    "Bellampalle",
    "Belonia",
    "Bengaluru",
    "Bettiah",
    "BhabUrban Agglomeration",
    "Bhadrachalam",
    "Bhadrak",
    "Bhagalpur",
    "Bhainsa",
    "Bharatpur",
    "Bharuch",
    "Bhatapara",
    "Bhavnagar",
    "Bhawanipatna",
    "Bheemunipatnam",
    "Bhilai Nagar",
    "Bhilwara",
    "Bhimavaram",
    "Bhiwandi",
    "Bhiwani",
    "Bhongir",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj",
    "Bikaner",
    "Bilaspur",
    "Bobbili",
    "Bodhan",
    "Bokaro Steel City",
    "Bongaigaon City",
    "Brahmapur",
    "Buxar",
    "Byasanagar",
    "Chaibasa",
    "Chalakudy",
    "Chandausi",
    "Chandigarh",
    "Changanassery",
    "Charkhi Dadri",
    "Chatra",
    "Chennai",
    "Cherthala",
    "Chhapra",
    "Chhapra",
    "Chikkamagaluru",
    "Chilakaluripet",
    "Chirala",
    "Chirkunda",
    "Chirmiri",
    "Chittoor",
    "Chittur-Thathamangalam",
    "Coimbatore",
    "Cuttack",
    "Dalli-Rajhara",
    "Darbhanga",
    "Darjiling",
    "Davanagere",
    "Deesa",
    "Dehradun",
    "Dehri-on-Sone",
    "Delhi",
    "Deoghar",
    "Dhamtari",
    "Dhanbad",
    "Dharmanagar",
    "Dharmavaram",
    "Dhenkanal",
    "Dhoraji",
    "Dhubri",
    "Dhule",
    "Dhuri",
    "Dibrugarh",
    "Dimapur",
    "Diphu",
    "Dumka",
    "Dumraon",
    "Durg",
    "Eluru",
    "English Bazar",
    "Erode",
    "Etawah",
    "Faridabad",
    "Faridkot",
    "Farooqnagar",
    "Fatehabad",
    "Fatehpur Sikri",
    "Fazilka",
    "Firozabad",
    "Firozpur Cantt.",
    "Firozpur",
    "Forbesganj",
    "Gadwal",
    "Gandhinagar",
    "Gangarampur",
    "Ganjbasoda",
    "Gaya",
    "Giridih",
    "Goalpara",
    "Gobichettipalayam",
    "Gobindgarh",
    "Godhra",
    "Gohana",
    "Gokak",
    "Gooty",
    "Gopalganj",
    "Gudivada",
    "Gudur",
    "Gumia",
    "Guntakal",
    "Guntur",
    "Gurdaspur",
    "Gurgaon",
    "Guruvayoor",
    "Guwahati",
    "Gwalior",
    "Habra",
    "Hajipur",
    "Haldwani-cum-Kathgodam",
    "Hansi",
    "Hapur",
    "Hardoi ",
    "Hardwar",
    "Hazaribag",
    "Hindupur",
    "Hisar",
    "Hoshiarpur",
    "Hubli-Dharwad",
    "Hugli-Chinsurah",
    "Hyderabad",
    "Ichalkaranji",
    "Imphal",
    "Indore",
    "Itarsi",
    "Jabalpur",
    "Jagdalpur",
    "Jaggaiahpet",
    "Jagraon",
    "Jagtial",
    "Jaipur",
    "Jalandhar Cantt.",
    "Jalandhar",
    "Jalpaiguri",
    "Jamalpur",
    "Jammalamadugu",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jamui",
    "Jangaon",
    "Jatani",
    "Jehanabad",
    "Jhansi",
    "Jhargram",
    "Jharsuguda",
    "Jhumri Tilaiya",
    "Jind",
    "Jodhpur",
    "Jorhat",
    "Kadapa",
    "Kadi",
    "Kadiri",
    "Kagaznagar",
    "Kailasahar",
    "Kaithal",
    "Kakinada",
    "Kalimpong",
    "Kalpi",
    "Kalyan-Dombivali",
    "Kamareddy",
    "Kancheepuram",
    "Kandukur",
    "Kanhangad",
    "Kannur",
    "Kanpur",
    "Kapadvanj",
    "Kapurthala",
    "Karaikal",
    "Karimganj",
    "Karimnagar",
    "Karjat",
    "Karnal",
    "Karur",
    "Karwar",
    "Kasaragod",
    "Kashipur",
    "KathUrban Agglomeration",
    "Katihar",
    "Kavali",
    "Kayamkulam",
    "Kendrapara",
    "Kendujhar",
    "Keshod",
    "Khair",
    "Khambhat",
    "Khammam",
    "Khanna",
    "Kharagpur",
    "Kharar",
    "Khowai",
    "Kishanganj",
    "Kochi",
    "Kodungallur",
    "Kohima",
    "Kolar",
    "Kolkata",
    "Kollam",
    "Koratla",
    "Korba",
    "Kot Kapura",
    "Kota",
    "Kothagudem",
    "Kottayam",
    "Kovvur",
    "Koyilandy",
    "Kozhikode",
    "Kunnamkulam",
    "Kurnool",
    "Kyathampalle",
    "Lachhmangarh",
    "Ladnu",
    "Ladwa",
    "Lahar",
    "Laharpur",
    "Lakheri",
    "Lakhimpur",
    "Lakhisarai",
    "Lakshmeshwar",
    "Lal Gopalganj Nindaura",
    "Lalganj",
    "Lalganj",
    "Lalgudi",
    "Lalitpur",
    "Lalsot",
    "Lanka",
    "Lar",
    "Lathi",
    "Latur",
    "Lilong",
    "Limbdi",
    "Lingsugur",
    "Loha",
    "Lohardaga",
    "Lonar",
    "Lonavla",
    "Longowal",
    "Loni",
    "Losal",
    "Lucknow",
    "Ludhiana",
    "Lumding",
    "Lunawada",
    "Lunglei",
    "Macherla",
    "Machilipatnam",
    "Madanapalle",
    "Maddur",
    "Madhepura",
    "Madhubani",
    "Madhugiri",
    "Madhupur",
    "Madikeri",
    "Madurai",
    "Magadi",
    "Mahad",
    "Mahalingapura",
    "Maharajganj",
    "Maharajpur",
    "Mahasamund",
    "Mahbubnagar",
    "Mahe",
    "Mahemdabad",
    "Mahendragarh",
    "Mahesana",
    "Mahidpur",
    "Mahnar Bazar",
    "Mahuva",
    "Maihar",
    "Mainaguri",
    "Makhdumpur",
    "Makrana",
    "Malaj Khand",
    "Malappuram",
    "Malavalli",
    "Malda",
    "Malegaon",
    "Malerkotla",
    "Malkangiri",
    "Malkapur",
    "Malout",
    "Malpura",
    "Malur",
    "Manachanallur",
    "Manasa",
    "Manavadar",
    "Manawar",
    "Mancherial",
    "Mandalgarh",
    "Mandamarri",
    "Mandapeta",
    "Mandawa",
    "Mandi Dabwali",
    "Mandi",
    "Mandideep",
    "Mandla",
    "Mandsaur",
    "Mandvi",
    "Mandya",
    "Manendragarh",
    "Maner",
    "Mangaldoi",
    "Mangaluru",
    "Mangalvedhe",
    "Manglaur",
    "Mangrol",
    "Mangrol",
    "Mangrulpir",
    "Manihari",
    "Manjlegaon",
    "Mankachar",
    "Manmad",
    "Mansa",
    "Mansa",
    "Manuguru",
    "Manvi",
    "Manwath",
    "Mapusa",
    "Margao",
    "Margherita",
    "Marhaura",
    "Mariani",
    "Marigaon",
    "Markapur",
    "Marmagao",
    "Masaurhi",
    "Mathabhanga",
    "Mathura",
    "Mattannur",
    "Mauganj",
    "Mavelikkara",
    "Mavoor",
    "Mayang Imphal",
    "Medak",
    "Medininagar (Daltonganj)",
    "Medinipur",
    "Meerut",
    "Mehkar",
    "Memari",
    "Merta City",
    "Mhaswad",
    "Mhow Cantonment",
    "Mhowgaon",
    "Mihijam",
    "Mira-Bhayandar",
    "Mirganj",
    "Miryalaguda",
    "Modasa",
    "Modinagar",
    "Moga",
    "Mohali",
    "Mokameh",
    "Mokokchung",
    "Monoharpur",
    "Moradabad",
    "Morena",
    "Morinda, India",
    "Morshi",
    "Morvi",
    "Motihari",
    "Motipur",
    "Mount Abu",
    "Mudabidri",
    "Mudalagi",
    "Muddebihal",
    "Mudhol",
    "Mukerian",
    "Mukhed",
    "Muktsar",
    "Mul",
    "Mulbagal",
    "Multai",
    "Mumbai",
    "Mundargi",
    "Mundi",
    "Mungeli",
    "Munger",
    "Murliganj",
    "Murshidabad",
    "Murtijapur",
    "Murwara (Katni)",
    "Musabani",
    "Mussoorie",
    "Muvattupuzha",
    "Muzaffarpur",
    "Mysore",
    "Nabadwip",
    "Nabarangapur",
    "Nabha",
    "Nadbai",
    "Nadiad",
    "Nagaon",
    "Nagapattinam",
    "Nagar",
    "Nagari",
    "Nagarkurnool",
    "Nagaur",
    "Nagda",
    "Nagercoil",
    "Nagina",
    "Nagla",
    "Nagpur",
    "Nahan",
    "Naharlagun",
    "Naidupet",
    "Naihati",
    "Naila Janjgir",
    "Nainital",
    "Nainpur",
    "Najibabad",
    "Nakodar",
    "Nakur",
    "Nalbari",
    "Namagiripettai",
    "Namakkal",
    "Nanded-Waghala",
    "Nandgaon",
    "Nandivaram-Guduvancheri",
    "Nandura",
    "Nandurbar",
    "Nandyal",
    "Nangal",
    "Nanjangud",
    "Nanjikottai",
    "Nanpara",
    "Narasapuram",
    "Narasaraopet",
    "Naraura",
    "Narayanpet",
    "Nargund",
    "Narkatiaganj",
    "Narkhed",
    "Narnaul",
    "Narsinghgarh",
    "Narsinghgarh",
    "Narsipatnam",
    "Narwana",
    "Nashik",
    "Nasirabad",
    "Natham",
    "Nathdwara",
    "Naugachhia",
    "Naugawan Sadat",
    "Nautanwa",
    "Navalgund",
    "Navsari",
    "Nawabganj",
    "Nawada",
    "Nawanshahr",
    "Nawapur",
    "Nedumangad",
    "Neem-Ka-Thana",
    "Neemuch",
    "Nehtaur",
    "Nelamangala",
    "Nellikuppam",
    "Nellore",
    "Nepanagar",
    "New Delhi",
    "Neyveli (TS)",
    "Neyyattinkara",
    "Nidadavole",
    "Nilambur",
    "Nilanga",
    "Nimbahera",
    "Nirmal",
    "Niwai",
    "Niwari",
    "Nizamabad",
    "Nohar",
    "Noida",
    "Nokha",
    "Nokha",
    "Nongstoin",
    "Noorpur",
    "North Lakhimpur",
    "Nowgong",
    "Nowrozabad (Khodargama)",
    "Nuzvid",
    "O' Valley",
    "Obra",
    "Oddanchatram",
    "Ongole",
    "Orai",
    "Osmanabad",
    "Ottappalam",
    "Ozar",
    "P.N.Patti",
    "Pachora",
    "Pachore",
    "Pacode",
    "Padmanabhapuram",
    "Padra",
    "Padrauna",
    "Paithan",
    "Pakaur",
    "Palacole",
    "Palai",
    "Palakkad",
    "Palampur",
    "Palani",
    "Palanpur",
    "Palasa Kasibugga",
    "Palghar",
    "Pali",
    "Pali",
    "Palia Kalan",
    "Palitana",
    "Palladam",
    "Pallapatti",
    "Pallikonda",
    "Palwal",
    "Palwancha",
    "Panagar",
    "Panagudi",
    "Panaji",
    "Panamattom",
    "Panchkula",
    "Panchla",
    "Pandharkaoda",
    "Pandharpur",
    "Pandhurna",
    "PandUrban Agglomeration",
    "Panipat",
    "Panna",
    "Panniyannur",
    "Panruti",
    "Panvel",
    "Pappinisseri",
    "Paradip",
    "Paramakudi",
    "Parangipettai",
    "Parasi",
    "Paravoor",
    "Parbhani",
    "Pardi",
    "Parlakhemundi",
    "Parli",
    "Partur",
    "Parvathipuram",
    "Pasan",
    "Paschim Punropara",
    "Pasighat",
    "Patan",
    "Pathanamthitta",
    "Pathankot",
    "Pathardi",
    "Pathri",
    "Patiala",
    "Patna",
    "Patratu",
    "Pattamundai",
    "Patti",
    "Pattran",
    "Pattukkottai",
    "Patur",
    "Pauni",
    "Pauri",
    "Pavagada",
    "Pedana",
    "Peddapuram",
    "Pehowa",
    "Pen",
    "Perambalur",
    "Peravurani",
    "Peringathur",
    "Perinthalmanna",
    "Periyakulam",
    "Periyasemur",
    "Pernampattu",
    "Perumbavoor",
    "Petlad",
    "Phagwara",
    "Phalodi",
    "Phaltan",
    "Phillaur",
    "Phulabani",
    "Phulera",
    "Phulpur",
    "Phusro",
    "Pihani",
    "Pilani",
    "Pilibanga",
    "Pilibhit",
    "Pilkhuwa",
    "Pindwara",
    "Pinjore",
    "Pipar City",
    "Pipariya",
    "Piriyapatna",
    "Piro",
    "Pithampur",
    "Pithapuram",
    "Pithoragarh",
    "Pollachi",
    "Polur",
    "Pondicherry",
    "Ponnani",
    "Ponneri",
    "Ponnur",
    "Porbandar",
    "Porsa",
    "Port Blair",
    "Powayan",
    "Prantij",
    "Pratapgarh",
    "Pratapgarh",
    "Prithvipur",
    "Proddatur",
    "Pudukkottai",
    "Pudupattinam",
    "Pukhrayan",
    "Pulgaon",
    "Puliyankudi",
    "Punalur",
    "Punch",
    "Pune",
    "Punganur",
    "Punjaipugalur",
    "Puranpur",
    "Puri",
    "Purna",
    "Purnia",
    "PurqUrban Agglomerationzi",
    "Purulia",
    "Purwa",
    "Pusad",
    "Puthuppally",
    "Puttur",
    "Puttur",
    "Qadian",
    "Raayachuru",
    "Rabkavi Banhatti",
    "Radhanpur",
    "Rae Bareli",
    "Rafiganj",
    "Raghogarh-Vijaypur",
    "Raghunathganj",
    "Raghunathpur",
    "Rahatgarh",
    "Rahuri",
    "Raiganj",
    "Raigarh",
    "Raikot",
    "Raipur",
    "Rairangpur",
    "Raisen",
    "Raisinghnagar",
    "Rajagangapur",
    "Rajahmundry",
    "Rajakhera",
    "Rajaldesar",
    "Rajam",
    "Rajampet",
    "Rajapalayam",
    "Rajauri",
    "Rajgarh (Alwar)",
    "Rajgarh (Churu)",
    "Rajgarh",
    "Rajgir",
    "Rajkot",
    "Rajnandgaon",
    "Rajpipla",
    "Rajpura",
    "Rajsamand",
    "Rajula",
    "Rajura",
    "Ramachandrapuram",
    "Ramagundam",
    "Ramanagaram",
    "Ramanathapuram",
    "Ramdurg",
    "Rameshwaram",
    "Ramganj Mandi",
    "Ramgarh",
    "Ramnagar",
    "Ramnagar",
    "Ramngarh",
    "Rampur Maniharan",
    "Rampur",
    "Rampura Phul",
    "Rampurhat",
    "Ramtek",
    "Ranaghat",
    "Ranavav",
    "Ranchi",
    "Ranebennuru",
    "Rangia",
    "Rania",
    "Ranibennur",
    "Ranipet",
    "Rapar",
    "Rasipuram",
    "Rasra",
    "Ratangarh",
    "Rath",
    "Ratia",
    "Ratlam",
    "Ratnagiri",
    "Rau",
    "Raurkela",
    "Raver",
    "Rawatbhata",
    "Rawatsar",
    "Raxaul Bazar",
    "Rayachoti",
    "Rayadurg",
    "Rayagada",
    "Reengus",
    "Rehli",
    "Renigunta",
    "Renukoot",
    "Reoti",
    "Repalle",
    "Revelganj",
    "Rewa",
    "Rewari",
    "Rishikesh",
    "Risod",
    "Robertsganj",
    "Robertson Pet",
    "Rohtak",
    "Ron",
    "Roorkee",
    "Rosera",
    "Rudauli",
    "Rudrapur",
    "Rudrapur",
    "Rupnagar",
    "Sabalgarh",
    "Sadabad",
    "Sadalagi",
    "Sadasivpet",
    "Sadri",
    "Sadulpur",
    "Sadulshahar",
    "Safidon",
    "Safipur",
    "Sagar",
    "Sagara",
    "Sagwara",
    "Saharanpur",
    "Saharsa",
    "Sahaspur",
    "Sahaswan",
    "Sahawar",
    "Sahibganj",
    "Sahjanwa",
    "Saidpur",
    "Saiha",
    "Sailu",
    "Sainthia",
    "Sakaleshapura",
    "Sakti",
    "Salaya",
    "Salem",
    "Salur",
    "Samalkha",
    "Samalkot",
    "Samana",
    "Samastipur",
    "Sambalpur",
    "Sambhal",
    "Sambhar",
    "Samdhan",
    "Samthar",
    "Sanand",
    "Sanawad",
    "Sanchore",
    "Sandi",
    "Sandila",
    "Sanduru",
    "Sangamner",
    "Sangareddy",
    "Sangaria",
    "Sangli",
    "Sangole",
    "Sangrur",
    "Sankarankovil",
    "Sankari",
    "Sankeshwara",
    "Santipur",
    "Sarangpur",
    "Sardarshahar",
    "Sardhana",
    "Sarni",
    "Sarsod",
    "Sasaram",
    "Sasvad",
    "Satana",
    "Satara",
    "Sathyamangalam",
    "Satna",
    "Sattenapalle",
    "Sattur",
    "Saunda",
    "Saundatti-Yellamma",
    "Sausar",
    "Savanur",
    "Savarkundla",
    "Savner",
    "Sawai Madhopur",
    "Sawantwadi",
    "Sedam",
    "Sehore",
    "Sendhwa",
    "Seohara",
    "Seoni",
    "Seoni-Malwa",
    "Shahabad",
    "Shahabad, Hardoi",
    "Shahabad, Rampur",
    "Shahade",
    "Shahbad",
    "Shahdol",
    "Shahganj",
    "Shahjahanpur",
    "Shahpur",
    "Shahpura",
    "Shahpura",
    "Shajapur",
    "Shamgarh",
    "Shamli",
    "Shamsabad, Agra",
    "Shamsabad, Farrukhabad",
    "Shegaon",
    "Sheikhpura",
    "Shendurjana",
    "Shenkottai",
    "Sheoganj",
    "Sheohar",
    "Sheopur",
    "Sherghati",
    "Sherkot",
    "Shiggaon",
    "Shikaripur",
    "Shikarpur, Bulandshahr",
    "Shikohabad",
    "Shillong",
    "Shimla",
    "Shirdi",
    "Shirpur-Warwade",
    "Shirur",
    "Shishgarh",
    "Shivamogga",
    "Shivpuri",
    "Sholavandan",
    "Sholingur",
    "Shoranur",
    "Shrigonda",
    "Shrirampur",
    "Shrirangapattana",
    "Shujalpur",
    "Siana",
    "Sibsagar",
    "Siddipet",
    "Sidhi",
    "Sidhpur",
    "Sidlaghatta",
    "Sihor",
    "Sihora",
    "Sikanderpur",
    "Sikandra Rao",
    "Sikandrabad",
    "Sikar",
    "Silao",
    "Silapathar",
    "Silchar",
    "Siliguri",
    "Sillod",
    "Silvassa",
    "Simdega",
    "Sindagi",
    "Sindhagi",
    "Sindhnur",
    "Singrauli",
    "Sinnar",
    "Sira",
    "Sircilla",
    "Sirhind Fatehgarh Sahib",
    "Sirkali",
    "Sirohi",
    "Sironj",
    "Sirsa",
    "Sirsaganj",
    "Sirsi",
    "Sirsi",
    "Siruguppa",
    "Sitamarhi",
    "Sitapur",
    "Sitarganj",
    "Sivaganga",
    "Sivagiri",
    "Sivakasi",
    "Siwan",
    "Sohagpur",
    "Sohna",
    "Sojat",
    "Solan",
    "Solapur",
    "Sonamukhi",
    "Sonepur",
    "Songadh",
    "Sonipat",
    "Sopore",
    "Soro",
    "Soron",
    "Soyagaon",
    "Sri Madhopur",
    "Srikakulam",
    "Srikalahasti",
    "Srinagar",
    "Srinagar",
    "Srinivaspur",
    "Srirampore",
    "Srisailam Project (Right Flank Colony) Township",
    "Srivilliputhur",
    "Sugauli",
    "Sujangarh",
    "Sujanpur",
    "Sullurpeta",
    "Sultanganj",
    "Sultanpur",
    "Sumerpur",
    "Sumerpur",
    "Sunabeda",
    "Sunam",
    "Sundargarh",
    "Sundarnagar",
    "Supaul",
    "Surandai",
    "Surapura",
    "Surat",
    "Suratgarh",
    "SUrban Agglomerationr",
    "Suri",
    "Suriyampalayam",
    "Suryapet",
    "Tadepalligudem",
    "Tadpatri",
    "Takhatgarh",
    "Taki",
    "Talaja",
    "Talcher",
    "Talegaon Dabhade",
    "Talikota",
    "Taliparamba",
    "Talode",
    "Talwara",
    "Tamluk",
    "Tanda",
    "Tandur",
    "Tanuku",
    "Tarakeswar",
    "Tarana",
    "Taranagar",
    "Taraori",
    "Tarbha",
    "Tarikere",
    "Tarn Taran",
    "Tasgaon",
    "Tehri",
    "Tekkalakote",
    "Tenali",
    "Tenkasi",
    "Tenu dam-cum-Kathhara",
    "Terdal",
    "Tezpur",
    "Thakurdwara",
    "Thammampatti",
    "Thana Bhawan",
    "Thane",
    "Thanesar",
    "Thangadh",
    "Thanjavur",
    "Tharad",
    "Tharamangalam",
    "Tharangambadi",
    "Theni Allinagaram",
    "Thirumangalam",
    "Thirupuvanam",
    "Thiruthuraipoondi",
    "Thiruvalla",
    "Thiruvallur",
    "Thiruvananthapuram",
    "Thiruvarur",
    "Thodupuzha",
    "Thoubal",
    "Thrissur",
    "Thuraiyur",
    "Tikamgarh",
    "Tilda Newra",
    "Tilhar",
    "Tindivanam",
    "Tinsukia",
    "Tiptur",
    "Tirora",
    "Tiruchendur",
    "Tiruchengode",
    "Tiruchirappalli",
    "Tirukalukundram",
    "Tirukkoyilur",
    "Tirunelveli",
    "Tirupathur",
    "Tirupathur",
    "Tirupati",
    "Tiruppur",
    "Tirur",
    "Tiruttani",
    "Tiruvannamalai",
    "Tiruvethipuram",
    "Tiruvuru",
    "Tirwaganj",
    "Titlagarh",
    "Tittakudi",
    "Todabhim",
    "Todaraisingh",
    "Tohana",
    "Tonk",
    "Tuensang",
    "Tuljapur",
    "Tulsipur",
    "Tumkur",
    "Tumsar",
    "Tundla",
    "Tuni",
    "Tura",
    "Uchgaon",
    "Udaipur",
    "Udaipur",
    "Udaipurwati",
    "Udgir",
    "Udhagamandalam",
    "Udhampur",
    "Udumalaipettai",
    "Udupi",
    "Ujhani",
    "Ujjain",
    "Umarga",
    "Umaria",
    "Umarkhed",
    "Umbergaon",
    "Umred",
    "Umreth",
    "Una",
    "Unjha",
    "Unnamalaikadai",
    "Unnao",
    "Upleta",
    "Uran Islampur",
    "Uran",
    "Uravakonda",
    "Urmar Tanda",
    "Usilampatti",
    "Uthamapalayam",
    "Uthiramerur",
    "Utraula",
    "Vadakkuvalliyur",
    "Vadalur",
    "Vadgaon Kasba",
    "Vadipatti",
    "Vadnagar",
    "Vadodara",
    "Vaijapur",
    "Vaikom",
    "Valparai",
    "Valsad",
    "Vandavasi",
    "Vaniyambadi",
    "Vapi",
    "Vapi",
    "Varanasi",
    "Varkala",
    "Vasai-Virar",
    "Vatakara",
    "Vedaranyam",
    "Vellakoil",
    "Vellore",
    "Venkatagiri",
    "Veraval",
    "Vidisha",
    "Vijainagar, Ajmer",
    "Vijapur",
    "Vijayapura",
    "Vijayawada",
    "Vijaypur",
    "Vikarabad",
    "Vikramasingapuram",
    "Viluppuram",
    "Vinukonda",
    "Viramgam",
    "Virudhachalam",
    "Virudhunagar",
    "Visakhapatnam",
    "Visnagar",
    "Viswanatham",
    "Vita",
    "Vizianagaram",
    "Vrindavan",
    "Vyara",
    "Wadgaon Road",
    "Wadhwan",
    "Wadi",
    "Wai",
    "Wanaparthy",
    "Wani",
    "Wankaner",
    "Wara Seoni",
    "Warangal",
    "Wardha",
    "Warhapur",
    "Warisaliganj",
    "Warora",
    "Warud",
    "Washim",
    "Wokha",
    "Yadgir",
    "Yamunanagar",
    "Yanam",
    "Yavatmal",
    "Yawal",
    "Yellandu",
    "Yemmiganur",
    "Yerraguntla",
    "Yevla",
    "Zaidpur",
    "Zamania",
    "Zira",
    "Zirakpur",
    "Zunheboto",
  ]
  return (
    <div>
      <Header></Header>
      <div className="searchArea">
        <img className='bgImg w-screen blur-sm' src='https://www.parents.com/thmb/-WzXAufki45bZr9KV9Ptx5r8mZo=/1000x667/filters:fill(auto,1)/shutterstock_286469927-8b82b18bca12479ba7776af8773fed8e.jpg' alt="" />
        <div className='iconDiv'>
          <div className="wedding"><FestivalOutlined /><span>Wedding Shoots</span></div>
          <div className="instagram"><Instagram />Instagram Shoots</div>
          <div className="occassional"><HolidayVillage /><span>Occassional Shoots</span></div>
          <div className="corporate"><CorporateFare /><span>Corporate Shoots</span></div>
          <div className="hotelandresorts"><Hotel /><span>Hotels and Resort Shoots</span></div>
        </div>
            <div className="searchBar">
              
              <select name="location" id="location">
              <option value="select">Select Location</option>
              {statesList.map((i)=>{
                return <option value={i}>{i}</option>
              })}
              </select>
              <input type="date" name="date" id="date" />
              <button type="submit">SEARCH</button>
            </div>
            <div className="feauturesDiv">
              
            </div>
      </div>
      <div className="bottom">

      </div>
      <div className="footer bg-grey1 p-2">
        <footer className='bg-white m-4 p-4 rounded-xl'>
          <div className="container footerContainer">
            <div className="footer-nav flex flex-around flex-start flex-g-1">
              <div className="flex flex-col">
                <span className="logo-holder">
                  <img src={bg} className='w-32' alt="Logo" />
                </span>
                <p className="m-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis
                  id fames dolor.
                </p>
                <div className="social-medias flex flex-grow p-4">
                  <a href="/" className="social-media flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram w-8 h-8 mx-2" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a href="/" className="social-media flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter w-8 h-8 mx-2" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="/" className="social-media flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github w-8 h-8 mx-2" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a href="/" className="social-media flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin w-8 h-8 mx-2" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col flex flex-row flex-grow">
                <h3 className="p-4">Info</h3>
                <nav >
                  <ul>
                    <li><a href="/">Formats</a></li>
                    <li><a href="/">Compression</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Status</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col flex flex-column flex-g-1 flex-start">
                <h3 className="p-4">Resources</h3>
                <nav>
                  <ul>
                    <li><a href="/">Developer API</a></li>
                    <li><a href="/">Tools</a></li>
                    <li><a href="/">Blog</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col flex flex-column flex-g-1 flex-start">
                <h3 className="p-4">Company</h3>
                <nav>
                  <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Sustainability</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Privacy</a></li>
                  </ul>
                </nav></div>
            </div>
            <div className="copyright">© 2022 – All Rights Reserved. (Not real)</div>
          </div>
        </footer>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="vbattalshn" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </div>
    </div>
  )
}

export default Homepage