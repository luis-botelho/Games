// objeto Game 
function Game(nome,produtora,descricao,ano){
    this.nome = nome;
    this.produtora = produtora;
    this.descricao = descricao;
    this.ano = ano;
};

// classicos
var pacMan = new Game('Pac-Man', 'Namco', 'O jogo foi lançado em 22 de maio de 1980. A ideia do desenho original ocorreu durante um jantar com amigos, e deve-se a uma pizza sem uma fatia, que fazia lembrar uma boca aberta; assim tem origem uma personagem inspirada em Paku, uma personagem popular no Japão conhecido pelo seu apetite.', 1980);
var superMario = new Game( 'Super Mario Bros.', 'Nintendo', 'Os jogadores controlam Mario, ou seu irmão Luigi no modo multijogador, enquanto viajam pelo Reino dos Cogumelos para resgatar a Princesa Peach de Bowser. Eles devem percorrer os mundos em uma visão em rolagem lateral, evitando perigos como inimigos e buracos com a ajuda de power-ups como o Super Cogumelo, Fire Flower e Starman.', 1985);
var spaceInvaders = new Game( 'Space invaders','Taito Corporation', 'Em Space Invaders o jogador controla os movimentos da arma "Laser Base", um canhão laser que se movimento na parte inferior da tela. Da parte superior marcham em direção ao canhão aliens organizados em linhas. O objetivo do jogador é evitar que os aliens atinjam a parte inferior da tela, para essa tarefa o canhão possui munição infinita para atirar. Ao acertar e destruir um número grande aliens os restantes começam a marchar mais rapidamente em direção ao jogador. Quando o jogador elimina todos os aliens uma nova formação é montada agora iniciando uma linha abaixo da formação anterior. Ocasionalmente uma nave surge voando na parte superior da tela e dá ao jogador pontos extras quando atingida.', 1978);
// mobas
var lol = new Game('League of Legends', 'Riot Games', 'um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.', 2009);
var dota = new Game('Dota II', 'Valve Corporation', 'o MOBA da Valve, empresa dona da Steam, baseado em um antigo mod de Warcraft 3, o Defense of the Ancients (DotA) no qual os jogadores devem se enfrentar online em acirradas batalhas entre equipes. Mantendo o gameplay do original, ele apresenta gráficos e efeitos sonoros melhorados', 2013)
var smite = new Game('Smite', 'Hi-Rez', 'MOBA 3D que leva os jogadores à assumirem o papel de deuses mitológicos e participar de combates em arenas contra outros jogadores. “Smite” apresenta o gênero MOBA em uma nova perspectiva, com visão em terceira pessoa. ... O estilo de jogo segue o modelo dos MOBAs tradicionais', 2014)
// fps
var csGo = new Game('Counter-Strike: Global Offensive','Valve', 'jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. ... O jogo conta com conteúdo clássico de tiro, como versões retrabalhadas de mapas clássicos, bem como novos mapas, personagens e modos de jogo.',2012)
var valorant = new Game('Valorant', 'Riot Games', 'jogo FPS da Riot Games, a mesma desenvolvedora do League of Legends (LoL). Conhecido inicialmente como “Project A”, o game é um fps 5v5 tático que mistura elementos de Counter Strike: Global Offensive (CS:GO) com Overwatch. ... Vence a equipe que fizer 13 pontos primeiro, e os jogos têm até 24 rounds.', 2020)
var Overwatch = new Game('Overwatch', 'Blizzard Entertainment.', 'jogo eletrônico multijogador de tiro em primeira pessoa desenvolvido e publicado pela Blizzard Entertainment. Foi lançado em 24 de maio de 2016 para Microsoft Windows, PlayStation 4 e Xbox One e em 15 de outubro de 2019 para Nintendo Switch.', 2016)
// rouguelike
var deadCells = new Game('Dead Cells','Motion Twin', 'um jogo eletrônico roguelike-metroidvania desenvolvido e publicado pela Motion Twin. ... Dead Cells usa um sistema permadeath, fazendo com que o jogador perca todas as células e outras moedas ou itens em cada instância da morte. A Motion Twin foi inspirada por The Binding of Isaac no desenvolvimento do jogo.', 2017)
var hades = new Game('Hades', 'Supergiant Games', 'Dos mesmos criadores de Bastion, Transistor e Pyre, Hades é um game que pertence ao gênero roguelike, que envolve mapas com morte permanente. ... No jogo, os players se veem na pele de Zagreu, o Príncipe do Submundo e filho do deus Hades. O objetivo é guiar o protagonista em uma fuga do inferno', 2020)
var diablo = new Game('Diablo', 'Blizzard', 'Um jogo de computador estilo Action RPG, passado em época medieval fictícia. Produzido pela Blizzard North e distribuído pela Blizzard Entertainment, foi lançado em 1996. O objetivo deste primeiro jogo da série é, basicamente, acabar com o mal que esta assolando a pequena cidade de Tristram, espalhado pelo Diablo, o Senhor do Terror. O personagem ganha pontos de experiência após matar inimigos, acrescendo seus níveis e aumentando suas magias e atributos (força, magia, destreza e vitalidade) a livre escolha.', 1996)
//  games opem word 
var fallout = new Game('Fallout 4', 'Bethesda',' game da série de RPG pós-apocalíptico disponível para PC, PS4 e Xbox One. ... O jogo dá total liberdade de exploração pela cidade de Boston destruída, além de permitir ao jogador optar por uma visão em primeira ou terceira pessoa', 2015)
var skyrim = new Game('The Elder Scrolls V: Skyrim', 'Betehsda','um jogo de RPG que mantém a tradicional jogabilidade de mundo aberto encontrada na série The Elder Scrolls. O jogador é livre para andar pela terra de Skyrim a sua vontade. ... Cada vilarejo e cidade possui sua própria economia, que o jogador pode manipular ou sabotar se escolher fazer isso.', 2011)
var gta = new Game('Grand Theft Auto V', 'Rockstar Games', 'um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. ... O modo multijogador, Grand Theft Auto Online, permite que até trinta jogadores explorem o mundo e entrem em partidas competitivas ou cooperativas.', 2013)
// MMo rpg
var wow = new Game('World of Warcraft','Blizzard.', '(também conhecido pelo acrônimo WoW) é um jogo on-line do gênero MMORPG, desenvolvido e distribuído pela produtora Blizzard Entertainment e lançado em 2004. O jogo se passa no mundo fantástico de Azeroth, introduzido no primeiro jogo da série, Warcraft: Orcs & Humans, lançado em 1994.', 2004)
var tibia = new Game('Tibia', 'Cip Soft', 'Tibia é um jogo eletrônico multijogador (MMORPG) gratuito, desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais antigos do gênero.', 1997)
var lineage = new Game('Lineage II','NC soft', 'um dos mais clássicos RPGs online já lançados para o PC. Com gráficos em 3D e um gigantesco mundo aberto, é possível criar um personagem e viver aventuras ao lado de companheiros ou desafiar seus mais temerosos inimigos em missões especiais.', 2003)

const oldSchool = [pacMan,superMario,spaceInvaders];
const moba = [lol,dota,smite];
const fps = [csGo,valorant,Overwatch];
const rogueLikes = [deadCells,hades,diablo];
const openWorld = [fallout,skyrim,gta];
const mmoRpg = [wow,tibia,lineage];

const categories = [oldSchool, fps,moba, rogueLikes, openWorld,mmoRpg];

exports.categories = categories;
exports.oldSchool = oldSchool;
exports.fps = fps;
exports.rogueLikes = rogueLikes;
exports.openWorld = openWorld;
exports.mmoRpg = mmoRpg;
exports.moba = moba;