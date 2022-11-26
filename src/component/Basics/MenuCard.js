import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description,IMDb_Rating } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h1 className="card-title"> {name} </h1>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <br></br><span className="card-description subtle">IMDb Rating : 
                      {IMDb_Rating}
                    </span>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;