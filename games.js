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
      filter: [`shoot`, `mp`, `fight`],
      link: `rooftop-snipers`,
      imgsrc: `rooftop.jpg`,
      name: `Rooftop Snipers`,
      developer: `Pat Eichler`,
      desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
      controls: [`W/I: Jump`, `E/O: Shoot`]
    },
    {
      filter: [`mp`],
      link: `tube-jumpers`,
      imgsrc: `tj.jpg`,
      name: `Tube Jumpers`,
      developer: `Pat Eichler`,
      desc: `Tube Jumpers is local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
      controls: [`W/I: Jump`]
    },
    {
      filter: [`plat`],
      link: `slope`,
      imgsrc: `slope.jpg`,
      name: `Slope`,
      developer: `Rob Kay`,
      desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
      controls: [`AD/QE/Arrow Keys: Control movement`]
    },
    {
      filter: [`mp`, `shoot`, `fight`],
      link: `getaway-shootout`,
      imgsrc: `getaway-shootout.jpg`,
      name: `Getaway Shootout`,
      developer: `Pat Eichler`,
      desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
      controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
    },
    {
      filter: [`mp`],
      link: `eaglercraft`,
      imgsrc: `eaglercraft.png`,
      name: `Eaglercraft`,
      developer: `LAX1DUDE`,
      desc: `Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. You can join real Minecraft 1.5.2 servers with it through a custom proxy based on Bungeecord.
      
      If your keyboard inputs aren't registering, try refreshing the page.
  
      Want to join more servers? You can find supported servers here: https://g.eags.us/eaglercraft/servers`,
      controls: [`Controls can be modified ingame`]
    },
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
  