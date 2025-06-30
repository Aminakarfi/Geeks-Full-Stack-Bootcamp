import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        # Step 2: Initialization
        if items is None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0  # page index (0-based)
        self.total_number_page = math.ceil(len(self.items) / self.page_size)

    # Step 3: Show visible items on current page
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Step 4a: Go to specific page number (user enters page 1 to N)
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_number_page:
            raise ValueError(f"Page number must be between 1 and {self.total_number_page}")
        self.current_idx = page_num - 1
        return self

    # Step 4b: Go to first page
    def first_page(self):
        self.current_idx = 0
        return self

    # Step 4c: Go to last page
    def last_page(self):
        self.current_idx = self.total_number_page - 1
        return self

    # Step 4d: Go to next page
    def next_page(self):
        if self.current_idx < self.total_number_page - 1:
            self.current_idx += 1
        return self

   
    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # Step 5: Display items on current page as a string
    def __str__(self):
        return '\n'.join(self.get_visible_items())
# Step 6: Testing

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

# Test 1: First page
print(p.get_visible_items())  # ['a', 'b', 'c', 'd']

# Test 2: Next page
p.next_page()
print(p.get_visible_items())  # ['e', 'f', 'g', 'h']

# Test 3: Last page
p.last_page()
print(p.get_visible_items())  # ['y', 'z']

# Test 4: Go to page 10 (out of range) => catch error
try:
    p.go_to_page(10)
    print(p.current_idx + 1)
except ValueError as e:
    print("Error:", e)  # Page number must be between 1 and 7

# Test 5: Go to page 0 (invalid)
try:
    p.go_to_page(0)
except ValueError as e:
    print("Error:", e)  # Page number must be between 1 and 7

# Optional: Show current page items with __str__()
print(str(p))  # Will print last page items ('y', 'z') each on new line
