INSERT INTO cliente Values 
('609a2ca8-de4c-4778-a15f-529a6467a187', 'Alan', '1993-09-18');

INSERT INTO cliente Values 
('2aa1edb9-5db9-4580-b705-f42102ee95bb', 'Federico', '1994-09-18');

INSERT INTO empleados (nombre, rol) Values 
('Vicente', 'EMPLEADO');

INSERT INTO inventarios(nombre, precio, cantidad, venta) values 
('Escoba', null,2,0);

INSERT INTO reservaciones(Check_in, check_out, tiempo_de_estancia, precio, cliente_idCliente, codigo_auth) values 
('2023-05-02','2023-05-02','14:00:00',100,'609a2ca8-de4c-4778-a15f-529a6467a187','506493');

INSERT INTO reservaciones(Check_in, check_out, tiempo_de_estancia, precio, cliente_idCliente, codigo_auth) values 
('2023-05-03','2023-05-03','02:00:00',100,'609a2ca8-de4c-4778-a15f-529a6467a187', '940017');

INSERT INTO reservaciones(Check_in, check_out, tiempo_de_estancia, precio, cliente_idCliente, codigo_auth) values 
('2023-05-02','2023-05-02','14:00:00',100,'2aa1edb9-5db9-4580-b705-f42102ee95bb','830955');

INSERT INTO ventas (fecha, tipo_articulo, nombre_articulo, precio, cantidad) values 
('2023-05-01 18:10:35','Inventario', 'Agua', 10, 2);

INSERT INTO ventas (fecha, tipo_articulo, nombre_articulo, precio, cantidad) values 
('2023-05-02 18:10:35','Inventario', 'Chetos', 18, 1);

INSERT INTO ventas (fecha, tipo_articulo, nombre_articulo, precio, cantidad) values 
('2023-05-01 23:10:35','Inventario', 'Condones', 120, 1);

INSERT INTO ventas (fecha, tipo_articulo, nombre_articulo, precio, cantidad) values 
('2023-05-02 23:10:35','Inventario', 'Chelas', 35, 12);

INSERT INTO agenda (nombre, profesion, telefono) values 
('Alan', 'Ingeniero', '6561100437');

update inventarios set Precio = null where Nombre = 'Camara Seguridad';

-- ALTER TABLE empleado AUTO_INCREMENT=1;

Select * from clientes;
Select * from empleados;
Select * from inventarios;
Select * from reservacions;
Select * from venta;
Select * from agendas;

Select idReservaciones, Check_in, check_out, Tiempo_de_estancia, precio, codigo_auth, nombre as nombreCliente from reservaciones join cliente where idCliente = Cliente_idCliente;


Select nombre_articulo, precio from ventas where fecha between '2023-05-01 22:00:00' and '2023-05-02 22:00:00';