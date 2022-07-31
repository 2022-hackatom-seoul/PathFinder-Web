# Path Finder 

![pathfinder](https://user-images.githubusercontent.com/88828307/182005917-1909988c-900e-464f-af74-4863a996e642.png)

The Aggrigator Platform for the most efficient swap path in the IBC ecosystem.

![git1](https://user-images.githubusercontent.com/88828307/182005372-46b0a193-c8c9-4894-a62b-7550de73649c.png)

## Teams | Halley 
![halley](https://user-images.githubusercontent.com/88828307/182005913-93dc2abd-ce73-446d-8737-e9cb1414c2e7.png)

| Chaerin Kim | Juhyeon Im | Jiyeon Kim |
| :--------: | :--------: | :--------: | 
| PM, developer | PM, designer | developer |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Problems
![git2](https://user-images.githubusercontent.com/88828307/182005462-af76529b-897e-46ae-9b2f-75ba19059889.png)
* In the cosmos ecosystem, We can use various chains. Various Coins can be in Various Chains.
* We can have JUNO, ATOM, OSMO in both Juno and Osmosis.

![git3](https://user-images.githubusercontent.com/88828307/182005549-6b8b6a40-7a0c-40ba-86bd-b99695cc7221.png)
* But, What if we want to change our assets to one token before we sent it to the EX?
* What if we need need a lot of one type of coin for Defi / Governance?

![git4](https://user-images.githubusercontent.com/88828307/182005614-9c206eb9-31b8-4f40-9a2a-c2b33332bb1f.png)
* What if We need a lot of specific tokens in a specific chain?

![git5](https://user-images.githubusercontent.com/88828307/182005617-f5090438-646b-429f-9dcc-1faecc2efc0c.png)
* We can SWAP AND TRANSFER.
* But There are so many paths depending on the path(Token's Amount, Slippage)

## Solution
### Yes! The Solution is Path Finder!
### Path Finder is the Aggrigator Platform for the most efficient swap path in the IBC ecosystem. 
![git6](https://user-images.githubusercontent.com/88828307/182005618-b9ff1710-5f23-4994-a135-89b09e5f2e66.png)

### In the Process of Gathering, Path.Finder tells you which path you should go, to get large swap with the least money.
![Slide 4_3 - 7](https://user-images.githubusercontent.com/88828307/182007820-cdeb827b-42c6-45db-8798-7ec24b09175a.png)
* Arbitrage : Analyze liquidity to see where to swap to get a lot of tokens
* Slippage : The expected slippage is different for each swap amount and the higher the swap amount, the higher the expected slippage.
* Swap Fee : Since the fee is different for each swap amount, calculate this to reduce the total swap cost

![Slide 4_3 - 8](https://user-images.githubusercontent.com/88828307/182008543-178c642f-8398-47ad-983a-447f725e470c.png)
### How can we calculate the most efficient case?
* Making New DP(Dynamic Programming) Algorithms
* but, Initially, brute force must be used to gather diverse information
* We are using React js(Web Publishing + getting data), AWS(web server), Python(Data anaysis, dex data api bot), Mongo DB(save data), keplr(wallet), and JUNO(platform chain : CW-20 token contract) for developments!
## Developments
| JavaScript | React | AWS | Python | Mongo DB | Keplr | JUNO |
| :--------: | :--------: | :--------: | :--------: | :--------: | :--------: | :--------: |   
|   ![image](https://user-images.githubusercontent.com/72171903/180640940-cff8ce3c-1f89-44be-880c-9e64e95b0a7c.png)    |  ![image 48](https://user-images.githubusercontent.com/88828307/182008259-e9ccaa99-0b95-4181-8ddc-20c2ecff718f.png) | ![aws](https://user-images.githubusercontent.com/88828307/182005978-23677fd4-f6fe-4675-b1c6-f9f8f0f25a42.png) | ![image 49](https://user-images.githubusercontent.com/88828307/182008258-8e553c27-4127-4b79-8501-11637546477b.png) | ![image 51](https://user-images.githubusercontent.com/88828307/182008341-67f90cb8-5f61-4d55-b1b7-fc8b27450975.png) | ![image 50](https://user-images.githubusercontent.com/88828307/182008340-20bcb240-8fed-4bf9-b519-783009b3ffb4.png) | ![image 52](https://user-images.githubusercontent.com/88828307/182008430-f4eb94d4-efb8-4099-abe5-ee10f71795d6.png)


