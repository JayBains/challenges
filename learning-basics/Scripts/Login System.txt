users = ["a"]
passwords = ["b"]
online = "yes"

print('TC')

def login():
  while True:
    u = input('Username: ')
    p = input('Password: ')
    if u in users:
      x = users.index(u)
      if p == passwords[x]:
        print('Login successful.')
        break
      else:
        print('Error: password incorrect.')
        continue
    else:
      print('Error: user does not exist.')
      continue
  return x
    
def signup():
  newUser(users)
  newPass(passwords)

def newUser(x):
  while True:
    a = input('New username: ')
    if a in x:
      print('This username is unavailable.')
      continue
    else:
      x.append(a)
      break

def newPass(x):
  while True:
    a = input('Enter Password: ')
    b = len(a)
    if 9 < b < 17:
      print('Error: password too short.')
      continue
    else:
      passwords.append(a)
      print('Registration successful.')
      break

def exist():
  z = input('are you an existing user (Y/N)? ').lower()
  if z == 'y':
    login()
  else:
    signup()


while online == 'yes':
  exist()
  break
#  menu(x)

#while login returns false do all that
#while true, grant access to other features
