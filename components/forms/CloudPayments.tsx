import React, { useRef, useEffect } from 'react';

const CheckoutButton = () => {
  const checkoutBtnRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.cp = new window.CloudPayments();
      initCheckoutButton();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pay = () => {
    // @ts-ignore
    window.cp.pay(
      'auth', // или 'charge'
      {
        // options
        publicId: 'test_api_00000000000000000000002', // id из личного кабинета
        description: 'Оплата товаров в example.com', // назначение
        amount: 100, // сумма
        currency: 'RUB', // валюта
        accountId: 'user@example.com', // идентификатор плательщика (необязательно)
        invoiceId: '1234567', // номер заказа  (необязательно)
        email: 'user@example.com', // email плательщика (необязательно)
        skin: 'mini', // дизайн виджета (необязательно)
        autoClose: 3, // время в секундах до авто-закрытия виджета (необязательный)
        data: {
          myProp: 'myProp value',
        },
        configuration: {
          common: {
            successRedirectUrl: '/success', // адреса для перенаправления
            failRedirectUrl: '/fail', // при оплате по T-Pay
          },
        },
        payer: {
          firstName: 'Тест',
          lastName: 'Тестов',
          middleName: 'Тестович',
          birth: '1955-02-24',
          address: 'тестовый проезд дом тест',
          street: 'Lenina',
          city: 'MO',
          country: 'RU',
          phone: '123',
          postcode: '345',
        },
      },
      {
        onSuccess: function (options) {
          // действие при успешной оплате
        },
        onFail: function (reason, options) {
          // действие при неуспешной оплате
        },
        onComplete: function (paymentResult, options) {
          // вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          // например вызов вашей аналитики
        },
      }
    );
  };

  const initCheckoutButton = () => {
    checkoutBtnRef.current.addEventListener('click', pay);
  };

  return (
    <button ref={checkoutBtnRef}>Оплатить</button>
  );
};

export default CheckoutButton;