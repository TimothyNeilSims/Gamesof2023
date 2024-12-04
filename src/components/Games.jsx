import React from 'react';
import Game from './Game';
import game1Image from '../assets/images/deadspace.jpg';
import game2Image from '../assets/images/hogwartslegacy.jpeg';
import game3Image from '../assets/images/refour.jpeg';
import game4Image from '../assets/images/starwars.jpg';
import game5Image from '../assets/images/darkestdungeon.jpeg';
import game6Image from '../assets/images/streetfighter.jpeg';
import game7Image from '../assets/images/remnant.jpeg';
import game8Image from '../assets/images/bg.jpeg';
import game9Image from '../assets/images/starfield.jpeg';
import game10Image from '../assets/images/lethalcompany.jpeg';
import game11Image from '../assets/images/rorreturns.jpg';
import game12Image from '../assets/images/thefinals.jpeg';

const Games = () => {
  const games = [
    { month: 'January', title: 'Dead Space', image: game1Image, description: 'A remake of the popular genre-defining horror game', url: 'https://store.steampowered.com/app/1693980/Dead_Space/', source: 'Steam', link: 'https://store.steampowered.com/agecheck/app/1693980/' },
    { month: 'February', title: 'Hogwarts Legacy', image: game2Image, description: 'A fantasy RPG in the same world as the successful Harry Potter books', url: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/', source: 'Fanatical', link: 'https://www.fanatical.com/en/blog/10-things-you-need-to-know-about-hogwarts-legacy' },
    { month: 'March', title: 'Resident Evil 4', image: game3Image, description: 'Another remake of an incredibly popular classic horror game', url: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/', source: 'GameSpot', link: 'https://www.gamespot.com/articles/resident-evil-4-remake-revealed-releases-in-march-2023/1100-6504090/' },
    { month: 'April', title: 'STAR WARS Jedi: Survivor', image: game4Image, description: 'A sequel to the popular 2019 game STAR WARS Jedi: Fallen Order', url: 'https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/', source: 'Medium', link: 'https://medium.com/@Sullyhogs1/star-wars-jedi-survivor-a-depressing-yet-thrilling-follow-up-37b9aec7e3db'},
    { month: 'May', title: 'Darkest Dungeon II', image: game5Image, description: 'Another sequel, this time to the popular 2016 indie RPG', url: 'https://store.steampowered.com/app/1940340/Darkest_Dungeon_II/', source: 'Epic Games', link: 'https://store.epicgames.com/en-US/p/darkest-dungeon-2' },
    { month: 'June', title: 'Street Fighter 6', image: game6Image, description: 'Another entry into the classic fighting game series', url: 'https://store.steampowered.com/app/1364780/Street_Fighter_6/', source: 'Fanatical', link: 'https://www.fanatical.com/en/game/street-fighter-6' },
    { month: 'July', title: 'Remnant II', image: game7Image, description: "2023 may have been a year of 2's as this is yet another sequel, this time to the 2019 game Remnant: From the Ashes", url: 'https://store.steampowered.com/app/1282100/Remnant_II/', source: 'Fanatical', link: 'https://www.fanatical.com/en/game/remnant-ii' },
    { month: 'August', title: "Baldur's Gate 3", image: game8Image, description: "Larian Studio's take on Dungeons & Dragons that went on to become Game of the Year 2023", url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/', source: 'Larian Studios', link: 'https://www.themarysue.com/baldurs-gate-3-early-access-players-remember-to-do-this-crucial-thing-before-playing/' },
    { month: 'September', title: 'Starfield', image: game9Image, description: "Bethesda's long anticipated sci-fi RPG set in space", url: 'https://store.steampowered.com/app/1716740/Starfield/', source: 'Fanatical', link: 'https://www.fanatical.com/en/game/starfield' },
    { month: 'October', title: 'Lethal Company', image: game10Image, description: "A small indie co-op horror survival game that suprised everyone with it's huge explosion of popularity", url: 'https://store.steampowered.com/app/1966720/Lethal_Company/', source: 'Steam', link: 'https://store.steampowered.com/app/1966720/Lethal_Company/' },
    { month: 'November', title: 'Risk of Rain Returns', image: game11Image, description: 'A remaster of the beloved roguelike', url: 'https://store.steampowered.com/app/1337520/Risk_of_Rain_Returns/', source: 'Steam', link: 'https://store.steampowered.com/app/1337520/Risk_of_Rain_Returns/' },
    { month: 'December', title: 'The Finals', image: game12Image, description: 'A breath of fresh air in the FPS genre with destructible environments', url: 'https://store.steampowered.com/app/2073850/THE_FINALS/', source: 'Embark Studios', link: 'https://www.theverge.com/2023/12/7/23991851/the-finals-embark-studios-launch-xbox-ps5-pc-steam-available-now' },
  ];

  return (
    <div className="Games">
      {games.map((game, index) => (
        <Game key={index} game={game} />
      ))}
    </div>
  )
}

export default Games;