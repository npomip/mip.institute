import React, { useState } from 'react';

const CloudPaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    email: '',
    description: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    console.log('Начало оплаты');
    // @ts-ignore
    if (typeof window !== 'undefined' && window.cp) {
      // @ts-ignore
      const widget = new window.cp.CloudPayments();
      widget.pay(
        'auth', // или 'charge'
        {
          publicId: process.env.NEXT_PUBLIC_CLOUDPAYMENTS_TEST_PUBLIC_ID || '', // id из личного кабинета
          description: formData.description || 'Оплата товаров', // назначение
          amount: parseFloat(formData.amount) || 0, // сумма
          currency: 'RUB', // валюта
          accountId: formData.email, // идентификатор плательщика
          email: formData.email, // email плательщика
          skin: 'mini', // дизайн виджета
          data: {
            customField: 'value', // дополнительные данные
          },
        },
        {
          onSuccess: function (options: any) {
            console.log('Успешная оплата:', options);
          },
          onFail: function (reason: any, options: any) {
            console.error('Ошибка оплаты:', reason);
          },
          onComplete: function (paymentResult: any, options: any) {
            console.log('Транзакция завершена:', paymentResult);
          },
        }
      );
    } else {
      console.error('CloudPayments не загружен');
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="amount">Сумма:</label>
        
        <input
        style={{border: '1px solid black', borderRadius: '5px', padding: '5px', width: '100%'}}
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        style={{border: '1px solid black', borderRadius: '5px', padding: '5px', width: '100%'}}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Описание:</label>
        <input
        required
        style={{border: '1px solid black', borderRadius: '5px', padding: '5px', width: '100%'}}
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <button
      style={{border: '1px solid black', borderRadius: '5px', padding: '5px', width: '100%', marginTop: '10px', backgroundColor: 'rgb(148, 122, 255', color: 'white'}}
      onClick={handlePayment}>Оплатить</button>
    </form>
  );
};

export default CloudPaymentForm;
