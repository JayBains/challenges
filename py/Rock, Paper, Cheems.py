import math
import getpass

counter = 1
score = [0,0]
action = ["rock", "paper", "scissors"]
rematch = "yes"

print("Let's play rock, paper, cheems!")
p1 = input('Player 1 name: ')
p2 = input('Player 2 name: ')
rounds = int(input('best of how many games? '))
bo = math.ceil(rounds/2)
print(p1, "vs", p2)
print('Start')

def thonk(p1, p2): 
    if (p1 in action) & (p2 in action):
      if (p1 == 'rock') & (p2 == 'paper'):
          print(p1, 'vs', p2, ".", p2, "wins round", counter)
          score[1] += 1
      elif (p1 == 'rock') & (p2 == 'scissors'):
          print(p1, 'vs', p2, ".", p1, "wins round", counter)
          score[0] += 1
          
      elif (p1 == 'paper') & (p2 == 'rock'):
          print(p1, 'vs', p2, ".", p1, "wins round", counter)
          score[0] += 1
      elif (p1 == 'paper') & (p2 == 'scissors'):
          print(p1, 'vs', p2, ".", p2, "wins round", counter)
          score[1] += 1 
          
      elif (p1 == 'scissors') & (p2 == 'rock'):
          print(p1, 'vs', p2, ".", p2, "wins round", counter)
          score[1] += 1
      elif (p1 == 'scissors') & (p2 == 'paper'):
          print(p1, 'vs', p2, ".", p1, "wins round", counter)
          score[0] += 1
      else:
          print(p1, 'vs', p2, '. Round', counter, 'is a draw')   
    else:
      return False
    return True

def stonk(s1, s2):
  if (score[0] == bo) or (score[1] == bo) or (counter == rounds+1):
    if score[0] > score[1]:
      print("Game over!", p1, "wins", score)
    elif score[0] < score[1]:
      print("Game over!", p2, "wins", score)
    elif score[0] == score[1]:
      print("Game over, it's a tie!", score)
  else:
    return False

while rematch.lower() == "yes": 
  p1Action = getpass.getpass(prompt = 'Player 1 action: ').lower()
  p2Action = getpass.getpass(prompt = 'Player 2 action: ').lower()
  if thonk(p1Action, p2Action) == True:
    counter += 1
  else:
    print('Error: this is not a valid move.')
  if stonk(score[0], score[1]) == False:
    continue
  counter = 1
  score = [0,0]
  rematch = input('Would you like to play again? ')
else:
  print('Thank you for playing.')