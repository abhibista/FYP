﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Book.Migrations
{
    [DbContext(typeof(ArticleContext))]
    [Migration("20211119082049_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("Author", b =>
                {
                    b.Property<string>("FirstName")
                        .HasColumnType("text")
                        .HasColumnName("FirstName");

                    b.Property<int>("Id")
                        .HasColumnType("integer");

                    b.Property<string>("LastName")
                        .HasColumnType("text")
                        .HasColumnName("LastName");

                    b.ToTable("authors", "public");
                });
#pragma warning restore 612, 618
        }
    }
}
