using Microsoft.EntityFrameworkCore.Migrations;

namespace leaveManAPI.Migrations
{
    public partial class bothtable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TotalLeave",
                table: "Employees",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EndDate",
                table: "EmpLeaveMappings",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LeaveType",
                table: "EmpLeaveMappings",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NoofDays",
                table: "EmpLeaveMappings",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "StartDate",
                table: "EmpLeaveMappings",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalLeave",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "EmpLeaveMappings");

            migrationBuilder.DropColumn(
                name: "LeaveType",
                table: "EmpLeaveMappings");

            migrationBuilder.DropColumn(
                name: "NoofDays",
                table: "EmpLeaveMappings");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "EmpLeaveMappings");
        }
    }
}
