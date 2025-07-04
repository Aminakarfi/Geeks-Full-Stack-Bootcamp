# game.py
import random

class Game:
    def get_user_item(self):
        choices = ['rock', 'paper', 'scissors']
        while True:
            user_input = input("Choose rock, paper, or scissors: ").lower()
            if user_input in choices:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou selected {user_item}. The computer selected {computer_item}.")

        if result == "win":
            print("🎉 You win!\n")
        elif result == "draw":
            print("😐 It's a draw.\n")
        else:
            print("💻 Computer wins!\n")

        return result
