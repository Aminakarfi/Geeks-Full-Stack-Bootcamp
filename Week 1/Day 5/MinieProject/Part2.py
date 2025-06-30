
from game import Game

def get_user_menu_choice():
    print("=== Rock, Paper, Scissors ===")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    choice = input("Enter your choice (1/2/3): ")

    if choice == "1":
        return "play"
    elif choice == "2":
        return "show_scores"
    elif choice == "3":
        return "exit"
    else:
        print("Invalid choice. Try again.")
        return None

def print_results(results):
    print("\n--- Game Summary ---")
    print(f"Wins:   {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws:  {results['draw']}")
    print("Thanks for playing! 👋")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()
        if choice == "play":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "show_scores":
            print_results(results)
        elif choice == "exit":
            print_results(results)
            break

if __name__ == "__main__":
    main()
