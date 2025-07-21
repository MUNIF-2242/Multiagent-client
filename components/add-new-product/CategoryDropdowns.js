import React, { useState } from 'react';

const CategoryDropdowns = () => {
  const [subDropdown, setSubDropdown] = useState({
    showFinance: false,
    showAccounting: false,
    showFashion: false,
    showShirt: false,
  });

  const handleChange = (e, id) => {
    setSubDropdown((prevSubDropdown) => ({
      ...prevSubDropdown,
      [id]: !prevSubDropdown[id],
    }));
  };

  return (
    <div className="product-categories">
      <div className="cat-group">
        <div className="form-check">
          <input
            className="form-check-input has-sub"
            onChange={(e) => handleChange(e, 'showFinance')}
            checked={subDropdown.showFinance}
            type="checkbox"
            id="catFinance"
          />
          <label className="form-check-label" htmlFor="catFinance">
            Finance{' '}
            <span
            role="button"
            onClick={() => handleChange('showFinance')}
            >
              <i
                className={`fa-light ${
                  subDropdown.showFinance ? 'fa-minus' : 'fa-plus'
                }`}
              ></i>
            </span>
          </label>
        </div>
        <div
          className={`sub-cat-group ${
            subDropdown.showFinance ? '' : 'd-none'
          }`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="catBanking"
            />
            <label className="form-check-label" htmlFor="catBanking">
              Banking
            </label>
          </div>
          <div className="form-check">
          <input
            className="form-check-input has-sub"
            type="checkbox"
            id="catAccounting"
            onChange={(e) => handleChange(e, 'showAccounting')}
            checked={subDropdown.showAccounting}
          />
          <label className="form-check-label" htmlFor="catAccounting">
            Accounting{' '}
            <span
              role="button"
              onClick={() => handleChange('showAccounting')}
            >
              <i
                className={`fa-light ${
                  subDropdown.showAccounting ? 'fa-minus' : 'fa-plus'
                }`}
              ></i>
            </span>
          </label>
        </div>
        <div
          className={`sub-cat-group ${
            subDropdown.showAccounting ? '' : 'd-none'
          }`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="catBangladeshBank"
            />
            <label className="form-check-label" htmlFor="catBangladeshBank">
              Bangladesh Bank
            </label>
          </div>
        </div>
        </div>
      </div>

      <div className="cat-group">
        <div className="form-check">
          <input
            className="form-check-input has-sub"
            type="checkbox"
            id="catFashion"
            onChange={(e) => handleChange(e, 'showFashion')}
            checked={subDropdown.showFashion}
          />
          <label className="form-check-label" htmlFor="catFashion">
            Fashion & Clothing{' '}
            <span role="button" onClick={() => handleChange('showFashion')}>
              <i className={`fa-light ${
                  subDropdown.showFashion ? 'fa-minus' : 'fa-plus'
                }`}></i>
            </span>
          </label>
        </div>
        <div
          className={`sub-cat-group ${subDropdown.showFashion ? '' : 'd-none'}`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="catTShirt"
            />
            <label className="form-check-label" htmlFor="catTShirt">
              T-Shirt
            </label>
          </div>

          <div className="cat-group">
            <div className="form-check">
              <input
                className="form-check-input has-sub"
                type="checkbox"
                id="catShirt"
                onChange={(e) => handleChange(e, 'showShirt')}
                checked={subDropdown.showShirt}
              />
              <label className="form-check-label" htmlFor="catShirt">
                Shirt{' '}
                <span role='button' onClick={() => handleChange('showShirt')}>
                  <i className={`fa-light ${
                  subDropdown.showShirt ? 'fa-minus' : 'fa-plus'
                }`}></i>
                </span>
              </label>
            </div>
            <div  className={`sub-cat-group ${subDropdown.showShirt ? '' : 'd-none'}`}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="catCasualShirt"
                />
                <label className="form-check-label" htmlFor="catCasualShirt">
                  Casual Shirt
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="catBag" />
        <label className="form-check-label" htmlFor="catBag">
          Bag
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="catMonitor" />
        <label className="form-check-label" htmlFor="catMonitor">
          Monitor
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="catKeyboard" />
        <label className="form-check-label" htmlFor="catKeyboard">
          Keyboard
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="catMouse" />
        <label className="form-check-label" htmlFor="catMouse">
          Mouse
        </label>
      </div>
    </div>
  );
};

export default CategoryDropdowns;
