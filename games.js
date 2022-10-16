const gamesArr = [
    /*{
      filter: [`shoot`, `mp`],
      link: `sample`,
      imgsrc: `rooftop.jpg`,
      name: `Sample Game`,
      developer: `Sample Game Creator`,
      desc: `Sample Description`,
      controls: [`←/→ Arrow Keys: Move horizontally`]
    },*/
    {
      filter: [`emu`, `btn`],
      link: 'sm64',
      imgsrc: `mario64`,
      name: `Super Mario 64`
    },
    {
        filter: [`emu`],
      link: 'firered',
      imgsrc: `firered`,
      name: `Pokemon Fire Red`
    },
    {
        filter: [`ry`],
      link: 'tetris',
      imgsrc: `tetris`,
      name: `Tetris`
    },
    {
        filter: [`emu`],
      link: 'smash',
      imgsrc: `smashremix`,
      name: `Smash Remix`
    },
   
  ];
  
  //Fetch game count
  const gamescounter = document.getElementById("games-count");
  
  if (gamescounter != null) {
    gamescounter.innerText = gamesArr.length;
  }
  