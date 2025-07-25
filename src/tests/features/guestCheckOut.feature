Feature: Checkout products as a guest

  @guestCheckoutSuccess @regression
  Scenario: Successful guest checkout with valid product selection
    Given I navigate to the product page
    When I add an item to the cart
    Then the item should be added to the cart
    When I proceed to checkout
    And I fill in the guest checkout form with valid details

  @guestCheckoutUnsuccess @regression
  Scenario: Successful guest checkout with valid product selection
    Given I navigate to the product page
    When I add an item to the cart
    Then the item should be added to the cart
    When I proceed to checkout
    And I fill in the guest checkout form with valid details
    Then I should see the order confirmation page
