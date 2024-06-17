const provinces = [
  {
    name: 'Gauteng',
    municipalities: [
      {
        name: 'Johannesburg',
        wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 20", "Ward 21"],
      },
      {
        name: 'Pretoria',
        wards: ["Ward 5", "Ward 5", "Ward 6", "Ward 20", "Ward 21"],
      },
      {
        name: 'Ekurhuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
      {
        name: 'Emfuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
      {
        name: 'Johannesburg',
        wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 20", "Ward 21"],
      },
      {
        name: 'Pretoria',
        wards: ["Ward 5", "Ward 5", "Ward 6", "Ward 20", "Ward 21"],
      },
      {
        name: 'Ekurhuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
      {
        name: 'Emfuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
      {
        name: 'Johannesburg',
        wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 20", "Ward 21"],
      },
      {
        name: 'Pretoria',
        wards: ["Ward 5", "Ward 5", "Ward 6", "Ward 20", "Ward 21"],
      },
      {
        name: 'Ekurhuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
      {
        name: 'Emfuleni',
        wards: ["Ward 7", "Ward 8", "Ward 9", "Ward 20", "Ward 21"],
      },
    ],
  },
   {
    name: 'KwaZulu Natal',
    municipalities: [
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
    ],
  },
  {
    name: 'Eastern Cape',
    municipalities: [
      {
        name: 'Nelson Mandela Bay',
        wards: ["Ward 20", "Ward 21", "Ward 22", "Ward 20", "Ward 21"],
      },
      {
        name: 'Qunu',
        wards: ["Ward 23", "Ward 24", "Ward 25", "Ward 20", "Ward 21"],
      },
      {
        name: 'Ntabankulu',
        wards: ["Ward 26", "Ward 27", "Ward 28", "Ward 20", "Ward 21"],
      },
      {
        name: 'Matatiele',
        wards: ["Ward 20", "Ward 21", "Ward 22", "Ward 20", "Ward 21"],
      },
      {
        name: 'PE',
        wards: ["Ward 23", "Ward 24", "Ward 25", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nt',
        wards: ["Ward 26", "Ward 27", "Ward 28", "Ward 20", "Ward 21"],
      },
    ],
  },
  {
    name: 'Free State',
    municipalities: [
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
    ],
  },
  {
    name: 'North West',
    municipalities: [
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
    ],
  },
  {
    name: 'Northern Cape',
    municipalities: [
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
    ],
  },
  {
    name: 'Western Cape',
    municipalities: [
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Durban',
        wards: ["Ward 10", "Ward 11", "Ward 12", "Ward 20", "Ward 21"],
      },
      {
        name: 'Newcastle',
        wards: ["Ward 13", "Ward 14", "Ward 15", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msunduzi',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
      {
        name: 'Nquthu',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 19", "Ward 20", "Ward 21"],
      },
      {
        name: 'Msinga',
        wards: ["Ward 16", "Ward 17", "Ward 18", "Ward 20", "Ward 21"],
      },
    ],
  },
];

export default provinces;