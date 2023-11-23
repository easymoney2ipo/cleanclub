import {HelpOutline, Settings, AccountCircle, ContactEmergency, Add, Search} from '@mui/icons-material/';



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Pregled',
          icon: <Search/>,
        },
      ],
    },
  
    {
      title: 'Čistačice',
      links: [
        {
          name: 'Dodaj čišćenje',
          icon: <Add  />,
        },
        {
          name: 'Dodaj rezervaciju',
          icon: <Add  />,
        },
      ],
    },
    {
      title: 'Bookeri',
      links: [
        {
          name: 'Objavi upit',
          icon: <ContactEmergency  />,
        },
      ],
    },
    {
      title: 'Dodatno',
      links: [
        {
          name: 'Profil',
          icon: <AccountCircle />,
        },
        {
          name: 'Postavke',
          icon: <Settings />,
        },
        {
            name: 'Pitanja/FAQ',
            icon: <HelpOutline />,
          },
      ],
    },
  ];
  