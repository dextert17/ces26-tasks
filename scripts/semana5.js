function PalindromoController($scope) {
	// Por treino, resolvemos começar já com alguns palíndromos
  $scope.palindromos = [
    {palindromo: 'Osso'},
    {palindromo: 'Radar'}
  ];

  $scope.verifyString = function () {
  	var inverse = $scope.new_palindromo.split("").reverse().join("").toLowerCase();
  	var lower = $scope.new_palindromo.toLowerCase();
  	if(inverse === lower) {
  		$scope.palindromos.push({palindromo: $scope.new_palindromo});
  	}
  	else {
  		alert("Essa palavra não é um palíndromo!");
  	}
    $scope.new_palindromo = '';
  };
}