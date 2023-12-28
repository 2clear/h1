window.homepage = window.homepage || {};
window.homepage.Content = (() => {
  const _baseContent = [
    {
      text: 'Tickets/Kanban',
      url: 'https://justeattakeaway.atlassian.net/jira/software/c/projects/RMENU/boards/259',
      keybind: '1',
    },
    {
      text: 'Epics',
      url: 'https://justeattakeaway.atlassian.net/jira/software/c/projects/RMENU/boards/397',
      keybind: '2',
    },
    {
      text: 'Feedback',
      url: 'https://docs.google.com/spreadsheets/d/1mfarPDl8SmK2gP4Yod3aCtGSjX_HeDH_xD9POEc3C3o/edit#gid=1601947052',
      keybind: '3',
    },
    {
      text: 'Tell the team',
      url: 'https://trello.com/b/9UxllL1x/rmenu-tell-the-team',
      keybind: '4',
    },
    {
      text: '1o1s (All)',
      url: 'https://drive.google.com/drive/folders/1Gn1Vlf8XcNruGSK6zxMqX6Y1gowETH_9',
      keybind: '5',
    },
    {
      text: '1o1s (RMENU)',
      url: '1o1.html',
      keybind: '6',
    },
    {
      text: 'Career',
      url: 'https://docs.google.com/document/d/1iZzCUrmXyJaWS8kjMqWwqWtPKsVZSyGQ_GlK3cDH3Bs/edit',
      keybind: '7',
    },
    {
      text: 'RDS',
      url: 'rds.html',
      keybind: '8',
    },
    {
      text: 'Vienna',
      url: 'https://trello.com/b/Ggxj1Caw/rmenu-vienna',
      keybind: 'V',
    },
    {
      text: 'MY todo',
      url: 'https://docs.google.com/spreadsheets/d/1b6Xie2FcweL9rW_ErMTs9r9uW7R3ZO8I8fW_hvhdeBY/edit#gid=0',
      keybind: 'T'
    }
  ];
  const _tempContent = [
    {
      text: 'RMENU 2023 Performance Reviews',
      url: 'https://drive.google.com/drive/folders/1t0GZ7bYA4_hIWOMZxBLgd-1KKt0VlogO?usp=drive_link',
      keybind: 'R',
    }
    // {
    //   text: 'Perf review brown bag',
    //   url: 'https://drive.google.com/drive/u/0/folders/1jPDm2CXiqXij5Z-Tz-b6yJVr1k9ENMGb',
    //   keybind: 'a',
    // },
    // {
    //   text: 'epc',
    //   url: 'https://drive.google.com/drive/u/0/folders/1BrXAfGP72d43c7orq0TDZw6q8i02MUB7',
    //   keybind: 'b',
    // },
  ];

  return {
    init: () => {},
    getContent: () => {
      return {
        baseContent: _baseContent,
        tempContent: _tempContent,
      };
    },
  };
})();
