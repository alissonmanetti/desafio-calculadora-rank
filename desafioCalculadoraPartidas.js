function numberOfMatches(Win, Loses) {
    let result = Win - Loses;
    return result;
  }
  let numberOfWins = numberOfMatches(32, 3);
  let winningBalance = numberOfWins
  
  if (numberOfWins <= 10) {
    numberOfWins = "Ferro";
  } else if (numberOfWins <= 20 && numberOfWins >= 11) {
    numberOfWins = "Bronze";
  } else if (numberOfWins <= 50 && numberOfWins >= 21) {
    numberOfWins = "Prata";
  } else if (numberOfWins <= 80 && numberOfWins >= 51) {
    numberOfWins = "Ouro";
  } else if (numberOfWins <= 90 && numberOfWins >= 81) {
    numberOfWins = "Diamante";
  } else if (numberOfWins <= 100 && numberOfWins >= 91) {
    numberOfWins = "Lendário";
  } else if (numberOfWins >= 101) {
    numberOfWins = "imortal";
  }
  
  console.log(
    `o Herói tem um saldo de ${winningBalance} vitórias e ele está no nível ${numberOfWins}.`
  );
  