function factoriel(a){
	if(Math.round(a)==a){
		var i=1
		var entree=a;
		while(i<entree-1){
			a= a+a*i;
			i=i+1;
		}
		console.log(a);
	}
	else{
		return undefined;
    }
}
factoriel(5);
