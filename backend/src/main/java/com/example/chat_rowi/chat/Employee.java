package com.example.chat_rowi.chat;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )
    private Long id;
    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "product_id"
    )
    private Product productId;
}
