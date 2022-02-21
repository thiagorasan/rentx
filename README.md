# rentx
## Aplicativo de aluguel de carros

### Projeto desenvolvido com a Rocketseat

O projeto está em desenvolvimento, está sendo utilizado expo, principalmente pela vantagem de pode testar a UI/UX usando dispositivos físicos e pelo emulador. 

Para rodar o projeto, é necessário rodar o comando a seguir, irá baixar todos as libs necessárias presentes no **package.json**

```
yarn
```

O projeto foi desenvolvido utilizado typescript, para realizar as configurações automaticamente pelo expo basta criar um arquivo em branco **tsconfig.json** e rodar o comando:


```
expo start
```

Caso haja dificuldades para configurar o arquivo, respostas podem ser encontrada nos links abaixo:

[Documentação TS com Expo](https://docs.expo.dev/guides/typescript)  
[Configurando TS no Expo Bare](https://www.notion.so/Configurando-TS-no-Expo-Bare-72ab2a6c963947308f3d166547631b46)

As libs utilizadas no projeto estão todas disponíveis nas *dependencies* de **package.json**.

Foi usada a lib JSON server para simular uma api, a api simulada pode ser verificada em **services/server.json**
Para que a busca funcione, é preciso entrar na pasta de services e em **api.ts**, mudar o baseURL para o seu localhost. O link a seguir pode auxiliá-lo em casos de problemas:  


[Possíveis soluções para problemas de conexão](https://react-native.rocketseat.dev/erros/android-ios/#error-network-error) 

Para que a API funcione, é preciso rodar o comando:

```
yarn api
```

Nos scripts presentes em **package.json**, você verá o script 
> "api": "json-server ./src/services/server.json --host LOCALHOST --port 3333 --delay 700"


Mude **LOCALHOST** para o seu Localhost. A opção de delay com a flag *--delay* foi propositadamente colocada para fins de testes, mas não é estritamente necessária.

O projeto ainda está em desenvolvimento, configurações de calendário, animações, offline e possíveis melhoras de performance, estão sendo implementadas.

Abaixo um preview momentâneo do aplicativo:



https://user-images.githubusercontent.com/27020072/154966665-284b2ef5-115b-4be7-90e1-48fb05ab8caa.mov

