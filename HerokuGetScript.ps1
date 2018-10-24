Get-Date | Out-File E:\lagh3\Documents\2018-2\Moviles\apimovienight20182\HerokuRequests.txt -Append
Invoke-RestMethod -Method Get -Uri 'https://nodejsmovienight20182.herokuapp.com/dev' | Out-File E:\lagh3\Documents\2018-2\Moviles\apimovienight20182\HerokuRequests.txt -Append

#$data = Invoke-RestMethod -Method Get -Uri 'https://nodejsmovienight20182.herokuapp.com/dev'