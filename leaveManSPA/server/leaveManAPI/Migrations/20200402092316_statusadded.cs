using Microsoft.EntityFrameworkCore.Migrations;

namespace leaveManAPI.Migrations
{
    public partial class statusadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "EmpLeaveMappings",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "EmpLeaveMappings");
        }
    }
}
