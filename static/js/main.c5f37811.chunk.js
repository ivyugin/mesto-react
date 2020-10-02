(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=(a(17),a(10)),s=a(1),l=a(8),u=a.n(l);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u.a,className:"header__logo",alt:"logo"}))},m=o.a.createContext();var _=function(e){var t=e.onCardClick,a=e.card,n=e.onCardLike,c=e.onCardDelete,r=o.a.useContext(m),i=r._id===a.owner._id,s=a.likes.some((function(e){return e._id===r._id}));return o.a.createElement("li",{className:"place"},o.a.createElement("img",{className:"place__image",src:a.link,onClick:function(){t(a)}}),o.a.createElement("button",{className:"place__delete-btn ".concat(i&&"place__delete-btn_active"),onClick:function(){c(a)}}),o.a.createElement("div",{className:"place__description"},o.a.createElement("p",{className:"place__title"},a.name),o.a.createElement("div",{className:"place__like"},o.a.createElement("button",{className:"place__like-btn ".concat(s&&"place__like-btn_cheked"),onClick:function(){n(a)}}),o.a.createElement("h3",{className:"place__like-count"},a.likes.length))))};var d=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,r=e.cards,i=e.onCardLike,s=e.onCardDelete,l=o.a.useContext(m);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__avatar"},o.a.createElement("button",{className:"profile__avatar-edit",onClick:t}),o.a.createElement("img",{className:"profile__avatar-img",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:l.avatar})),o.a.createElement("div",{className:"profile__description"},o.a.createElement("h1",{className:"profile__name"},l.name),o.a.createElement("button",{className:"profile__edit-btn",onClick:a}),o.a.createElement("p",{className:"profile__job"},l.about))),o.a.createElement("button",{className:"profile__add-btn",onClick:n})),o.a.createElement("ul",{className:"places"},r.map((function(e){return o.a.createElement(_,{key:e._id,card:e,onCardClick:c,onCardLike:i,onCardDelete:s})})),o.a.createElement("div",{className:"popup popup_submit"},o.a.createElement("button",{className:"popup__close-btn"}),o.a.createElement("form",{className:"popup__container popup__container_submit",noValidate:!0},o.a.createElement("p",{className:"popup__container-title popup__container-title_submit"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{className:"popup__container-save-btn"},"\u0414\u0430")))))};var f=function(){return o.a.createElement("footer",{className:"footer"},"\xa9 2020 Mesto Russia")},h=a(4),v=a(5),b=a(11),E=a(9),g=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(v.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"popup popup_".concat(this.props.name," ").concat(this.props.isOpen&&"popup_opened")},o.a.createElement("button",{className:"popup__close-btn",onClick:this.props.onClose}),o.a.createElement("form",{className:"popup__container",noValidate:!0,onSubmit:this.props.onSubmit},o.a.createElement("p",{className:"popup__container-title"},this.props.title),this.props.children))}}]),a}(o.a.Component);var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,c=o.a.useContext(m),r=o.a.useState(""),i=Object(s.a)(r,2),l=i[0],u=i[1],p=o.a.useState(""),_=Object(s.a)(p,2),d=_[0],f=_[1],h=o.a.useState(!0),v=Object(s.a)(h,2),b=v[0],E=v[1],N=o.a.useState(""),C=Object(s.a)(N,2),k=C[0],j=C[1],O=o.a.useState(!1),y=Object(s.a)(O,2),S=y[0],U=y[1],P=o.a.useState(""),x=Object(s.a)(P,2),A=x[0],w=x[1],L=o.a.useState(!1),D=Object(s.a)(L,2),T=D[0],z=D[1];return o.a.useEffect((function(){u(c.name),f(c.about)}),[c]),o.a.useEffect((function(){E(!S&&!T)}),[S,T]),o.a.useEffect((function(){t&&(u(c.name),f(c.about),w(""),j(""),E(!0))}),[t]),o.a.createElement(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,about:d})}},o.a.createElement("div",{className:"popup__control"},o.a.createElement("input",{className:"popup__container-input popup__container-input_type_title",value:l||"",name:"title",required:!0,type:"text",minLength:"2",maxLength:"20",onChange:function(e){u(e.target.value),e.target.validity.valid?(j(""),U(!1)):(U(!0),j(e.target.validationMessage))}}),o.a.createElement("span",{className:"popup__error ".concat(S&&"popup__error_active")},k)),o.a.createElement("div",{className:"popup__control"},o.a.createElement("input",{className:"popup__container-input popup__container-input_type_subtitle",value:d||"",name:"subtitle",required:!0,type:"text",minLength:"2",maxLength:"40",onChange:function(e){e.target.validity.valid?(z(!1),w("")):(z(!0),w(e.target.validationMessage)),f(e.target.value)}}),o.a.createElement("span",{className:"popup__error ".concat(T&&"popup__error_active")},A)),o.a.createElement("button",{className:"popup__container-save-btn ".concat(!b&&"popup__container-save-btn_inactive")},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=o.a.useContext(m),r=o.a.useState(),i=Object(s.a)(r,2),l=(i[0],i[1]),u=o.a.useState(),p=Object(s.a)(u,2),_=(p[0],p[1]),d=o.a.useRef();return o.a.useEffect((function(){l(c.name),_(c.about)}),[c]),o.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",id:"3",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:d.current.value})}},o.a.createElement("div",{className:"popup__control"},o.a.createElement("input",{ref:d,className:"popup__container-input popup__container-input_type_subtitle",name:"subtitle",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"}),o.a.createElement("span",{className:"popup__error"})),o.a.createElement("button",{className:"popup__container-save-btn"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlaceSubmit,c=(o.a.useContext(m),o.a.useState("")),r=Object(s.a)(c,2),i=r[0],l=r[1],u=o.a.useState(""),p=Object(s.a)(u,2),_=p[0],d=p[1],f=o.a.useState(!0),h=Object(s.a)(f,2),v=h[0],b=h[1],E=o.a.useState(""),N=Object(s.a)(E,2),C=N[0],k=N[1],j=o.a.useState(!0),O=Object(s.a)(j,2),y=O[0],S=O[1],U=o.a.useState(""),P=Object(s.a)(U,2),x=P[0],A=P[1],w=o.a.useState(!0),L=Object(s.a)(w,2),D=L[0],T=L[1];return o.a.useEffect((function(){b(!y&&!D)}),[y,D]),o.a.useEffect((function(){t&&(l(""),d(""),A(""),k(""),b(!1))}),[t]),o.a.createElement(g,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",id:"2",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:_})}},o.a.createElement("div",{className:"popup__control"},o.a.createElement("input",{className:"popup__container-input popup__container-input_type_title",value:i,name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text",minLength:"1",maxLength:"30",onChange:function(e){l(e.target.value),e.target.validity.valid?(k(""),S(!1)):(S(!0),k(e.target.validationMessage))}}),o.a.createElement("span",{className:"popup__error ".concat(y&&"popup__error_active")},C)),o.a.createElement("div",{className:"popup__control"},o.a.createElement("input",{className:"popup__container-input popup__container-input_type_subtitle",value:_,name:"subtitle",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",onChange:function(e){e.target.validity.valid?(T(!1),A("")):(T(!0),A(e.target.validationMessage)),d(e.target.value)}}),o.a.createElement("span",{className:"popup__error ".concat(D&&"popup__error_active")},x)),o.a.createElement("button",{className:"popup__container-save-btn ".concat(!v&&"popup__container-save-btn_inactive")},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};var j=function(e){return o.a.createElement("div",{className:"img-popup ".concat(e.card&&"popup_opened")},o.a.createElement("div",{className:"img-popup__container"},o.a.createElement("button",{className:"img-popup__close-btn",onClick:e.onClose}),o.a.createElement("img",{className:"img-popup__img",src:e.card.link}),o.a.createElement("p",{className:"img-popup__title"},e.card.name)))},O=new(function(){function e(t,a){Object(h.a)(this,e),this._token=a,this._baseUrl=t}return Object(v.a)(e,[{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getCardsArr",value:function(){return fetch(this._baseUrl+"/cards",{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"addNewCard",value:function(e){return fetch(this._baseUrl+"/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"likeCard",value:function(e,t){return fetch(this._baseUrl+"/cards/likes/"+e,{method:t?"PUT":"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-14","668dca3d-51ec-4823-a727-cc18d24544ec");var y=function(){var e=o.a.useState(),t=Object(s.a)(e,2),a=t[0],n=t[1],c=o.a.useState(),r=Object(s.a)(c,2),l=r[0],u=r[1],_=o.a.useState(),h=Object(s.a)(_,2),v=h[0],b=h[1],E=o.a.useState([]),g=Object(s.a)(E,2),y=g[0],S=g[1],U=o.a.useState(!1),P=Object(s.a)(U,2),x=P[0],A=P[1],w=o.a.useState({}),L=Object(s.a)(w,2),D=L[0],T=L[1];function z(){n(!1),u(!1),b(!1),A(!1)}return o.a.useEffect((function(){O.getCardsArr().then((function(e){return S(e),e})).catch((function(e){console.log(e)})),O.getUserInfo().then((function(e){return T(e),e})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(m.Provider,{value:D},o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"page"},o.a.createElement(p,null),o.a.createElement(d,{onEditProfile:function(){u(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){n(!0)},cards:y,onCardClick:function(e){A(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));O.likeCard(e._id,!t).then((function(t){var a=y.map((function(a){return a._id===e._id?t:a}));S(a)}))},onCardDelete:function(e){O.deleteCard(e._id).then((function(t){var a=y.filter((function(t){return t._id!=e._id}));S(a)}))}}),o.a.createElement(N,{isOpen:l,onClose:z,onUpdateUser:function(e){O.setUserInfo(e).then((function(e){T(e),z()})).catch((function(e){console.log(e)}))}}),o.a.createElement(k,{isOpen:v,onClose:z,onAddPlaceSubmit:function(e){O.addNewCard(e).then((function(e){S([].concat(Object(i.a)(y),[e])),z()})).catch((function(e){console.log(e)}))}}),o.a.createElement(C,{isOpen:a,onClose:z,onUpdateAvatar:function(e){O.setUserAvatar(e).then((function(e){T(e),z()})).catch((function(e){console.log(e)}))}}),o.a.createElement(j,{card:x,onClose:z}),o.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/logo.e889e45f.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.c5f37811.chunk.js.map