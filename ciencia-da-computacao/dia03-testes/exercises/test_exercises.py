import pytest
from exercises import list_numbers, number_phone, validate_email


def test_list_numbers():
    assert list_numbers(3)[-1] == "Fizz"


def test_list_numbers_with_buzz():
    assert list_numbers(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_abc_should_be_converted_in_2():
    assert number_phone("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert number_phone("DEF") == "333"


def test_expression_maximum_are_thirty_chars():
    long_expression = (
        "1111111111"  # 10 chars
        "1111111111"
        "1111111111"
        "1"
    )
    with pytest.raises(ValueError):
        number_phone(long_expression)


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        number_phone("I-****-MY_JOB")


def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")

