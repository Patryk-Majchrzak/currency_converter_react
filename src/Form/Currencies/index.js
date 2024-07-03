const Currencies = ({ title, currencies, currencyFromOrTo, changeCurrencyFromOrTo, additionalClass }) => (
        <>
            <span className="form__labelText">{title}</span>
            <select 
            className={`form__select ${additionalClass}`} 
            value={currencyFromOrTo} 
            onChange={changeCurrencyFromOrTo}>
                {currencies.map(currency => (
                    <option key={currency.id}>{currency.short}</option>
                ))}
            </select>
        </>
)

export default Currencies;